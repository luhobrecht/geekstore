
const {Users} = require('../database/models')


function remember(req, res, next){   
    if(req.cookies.userCookies && !req.session.userLogueado){      
        Users.findOne({                                      
            raw: true,
            where: {
                id : req.cookies.userCookies.userLogueado
            }})
            .then((user)=>{
                let {id, username} = req.cookies.userCookies
                if(id == user.id && username == user.user){ 
                   req.session.userLogueado = user.id            
                   return next();
                }else{
                console.log("Corrupted cookie detected: ", req.cookies.userCookies)
                res.clearCookie('userCookies')  
                res.redirect('/login')
                }
            })
            .catch(function(error){
                console.log("usuario no encontado en la base de datos", req.cookies.userCookies)
            })
    }else{
        return next();
    }
}

module.exports = remember


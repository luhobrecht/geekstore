const {Users} = require('../database/models')


const logInUser =  function(user, remember, req, res){

   return Users.findOne({
        raw: true,
        where: {
            user : user
        }})
        .then((user)=>{    
            req.session.userLogueado = user.id                        
            if (remember){                                      
                let cookieData = {
                    id: user.id,
                    user: user.user,
                }
                res.cookie('userCookies', cookieData, {maxAge:60000})
            }
                res.redirect('/')
        })
}

module.exports = logInUser
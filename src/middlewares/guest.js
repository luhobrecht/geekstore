function guest (req, res, next){
    if(req.session.userLogueado == undefined){
        next();
    }else{
        res.render("/register")
    }
}

module.exports = guest;
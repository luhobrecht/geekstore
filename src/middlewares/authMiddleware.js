function authMiddleware (req, res, next){
    if( req.session.userLoggeado != undefined){
        next();
    }else{
        res.render("/")
    }
}

module.exports = authMiddleware;
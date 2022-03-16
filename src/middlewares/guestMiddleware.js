function guestMiddleware (req, res, next){
    if( req.session.userLoggeado == undefined){
        next();
    }else{
        res.render("/register")
    }
}

module.exports = guestMiddleware;
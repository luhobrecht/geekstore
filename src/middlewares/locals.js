function locals (req, res, next){
    
    res.locals.userLocals = false;

    if(req.session.userLogueado){
        res.locals.userLocals = req.session.userLogueado;
    }

    next();
    
}

module.exports = locals;
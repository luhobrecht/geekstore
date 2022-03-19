function recordameMiddleware (req, res, next){
    next();
    if(req.cookies.recordame != undefined && req.session.userLoggeado == undefined){
        let users= findAll();
        for ( let i = 0; i < users.length; i++){
            if (users[i].user == req.cookie.recordame){
                    userTL = users[i];
                    break;
                }
            }
            req.session.userLoggeado = userTL;

        }
    }


module.exports = recordameMiddleware;
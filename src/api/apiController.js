const db = require ("../database/models")
const Op = db.sequelize.Op;

const apiController = {
    getUserByID: (req, res)  => {
        db.Users.findByPk(req.params.id,
            {attributes: ['id','name', 'user','email','city', 'img']})
        .then( user => {
            console.log(user)
            return res.status(200).json(
                {
                    data: user,
                    URL: `http://${req.get('host')}/img/users/${user.img}`,
                    status: 200
                })
        })
    },
    listUsers: (req,res) => {
        db.Users.findAll({attributes: ['id','name', 'user','email','city']}).then(function(users) {
        
            return res.status(200).json({
    
            count: users.length,
            data:users,
            status:200

                
            })
        })
    },
    getProductByID: (req, res)  => {
        db.Products.findByPk(req.params.id)
        .then( product => {
            return res.status(200).json(
                {
                    data: product,
                    URL: `http://${req.get('host')}/img/products/${product.img}`,
                    status: 200
                })
        })
    },
    listProducts: (req,res) => {
        db.Products.findAll()
        .then( products => {
        
            return res.status(200).json({
    
            count: products.length,
            data: products,
            status: 200
            })
        })
    }
}

module.exports = apiController
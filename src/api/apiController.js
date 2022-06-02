const db = require ("../database/models")
const Op = db.sequelize.Op;

const apiController = {
    productsList: async function (req, res){

        let products = await db.Products.findAll({
            oder:[
                ["id", "DESC"], 
            ]
            
        })

        let lastProducts = await db.Products.findAll({
            order: [
                ['id', 'DESC'],
            ],
            limit: 5
        })

        products.forEach(product =>{
            product.setDataValue("endpoint", "/api/products/" + product.id);
        })
        
        lastProducts.forEach(product => {
            product.setDataValue("endpoint", "/api/products/" + product.id);
        })

        let jsonProducts = {
            meta:{
                status: 200,
                total_products: products.length,
                lastProducts: lastProducts,
                url: "/api/products"
            },
            data:products
        }
        res.json(jsonProducts)

    },
    productDetail: function(req, res){
        db.Products.findByPk(req.params.id, {
        }).then(product =>{
            let productJson = {
                data:{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    discount: product.discount,
                }
            }
            res.json(productJson)
        })
    },
    usersList: function (req, res){
        db.Users.findAll().then(users => {
            let newData = users.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    user: user.user,
                    email: user.email,
                    city: user.city,
                    endpoint: "/api/users/" + user.id
                }
            })
            let respuesta = {
                meta:{
                    status: 200,
                    total_users: users.length ,
                    url: "/api/users"
                },
                data: newData 
            }
            res.json(respuesta) 
        })         
    },
    userDetail: function (req, res) {
        db.Users.findByPk(req.params.id).then(resultado => {
            let jsonProducto = {
                meta:{
                    status: 200,
                    url: "/api/users/"+ req.params.id
                },
                data: {
                    id: resultado.id,
                    name: resultado.name,
                    user: resultado.user,
                    email: resultado.email,
                    city: resultado.city
                }
            }
            res.json(jsonProducto);
        })
    }
/*
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
    },
    lastProducts: (req, res) => {
        await db.Product.findAll({
        include:["images"],
        order: [
            [" id ", 'DESC'],
        ],
        limit: 5
    })
}*/
}



module.exports = apiController
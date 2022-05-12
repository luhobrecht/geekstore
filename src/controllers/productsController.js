const express = require("express");
const fs = require("fs");
const path = require ("path");
const db = require ("../database/models")

/*function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    let products = JSON.parse(data);
    return products;
}

function writeFile(array){
    let string = JSON.stringify(array, null, 8);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), string);
}*/

const productController = {
    index: (req,res) => {
        db.Products.findAll()
        .then(function(products) {
            return res.render("products", {products: products})
        })
        //const products = findAll();
        //res.render("products", {products: products})
    },
    detail: (req, res) => {

        db.Products.findByPk(req.params.id)
        .then(function(product) {
            return res.render("productDetail", {product: product})
        })

        /*let products = findAll();

        let productFound = products.find(function(product){
           return product.id == req.params.id
        });

        const visited = products.filter(function(product){
            return product.type == 'visited'
        })

        res.render("productDetail", {product: productFound, visited});
        */
    },
    create: (req,res) => {
        res.render("createProduct");
    },
    save: (req,res) => {
        db.Products.create({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    discount: req.body.discount,
                    img: req.file.filename
                });

            res.redirect("/productos");
    },
        //let products = findAll();
        //if(req.file){
        //let newProduct = {
        //    id: products.length + 1,
        //    name: req.body.name,
        //    description: req.body.description,
        //    category: req.body.category,
        //    color: req.body.color,
        //    size: req.body.size,
        //    price: req.body.price,
        //    discount: req.body.discount,
        //    img: req.file.filename
        //}

        //products.push(newProduct);
        
        //writeFile(products);

       // res.redirect("/productos");
    //}else{
      //  res.render("createProduct");
    //}
    //},
    offers: (req,res) => {
    const products = findAll();

    const inSale = products.filter(function(product){
	    return product.category == 'in-sale'
    })
        res.render("offers", {offers: inSale})
    },
    cart: (req, res) => {
        res.render("productCart");
    },
    purchase:(req, res) => {
        res.render("purchase");
    },
    complete: (req, res) => {
        res.render("completePurchase");
    },
    edit: (req,res) => {

        db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render("editProduct", {product: product})
        })


        /*let products = findAll();
        
        let productFound = products.find(function(product){
            return product.id == req.params.id
         });
        res.render("editProduct", {product: productFound})
        */
    },
    update: (req, res) => {
        db.Products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            img: req.file.filename
        },{
            where: {
                id: req.params.id
            }
        });

    res.redirect("/productos") 
    },
        /*let products = findAll();

        let productoActualizado = products.map(function(product){
            if(product.id == req.params.id){
                product.name = req.body.name; 
                product.description = req.body.description;
                product.price = req.body.price;
                product.img = req.file.filename;   
                product.category = req.body.category;
                product.size = req.body.size;
                product.color = req.body.color;
                product.discount = req.body.discount;
            }
            return product;
        })
        //otra forma //
        //let productoEncontrado = products.find (function(producto){
        //    return producto.id == req.params.id
       // })

       // productoEncontrado.nombre = req.body.nombre;
       //producto.descripcion = req.body.descripcion;
       //producto.precio = req.body.precio;
       //producto.archivo = req.body.archivo;   

       writeFile(products);

       res.redirect ("/productos");
    },
    */
    destroy: function(req, res){
        db.Products.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect("/productos");
        /*let products = findAll();

        let productIndex = products.findIndex(function(product){
            return product.id == req.params.id
        })

        products.splice(productIndex, 1);

        writeFile(products);

        res.redirect("/productos");
    }
    /*otra forma mas facil
    destroy:(req,res)=>{

        let id=req.params.id;
        let finalProducts = products.filter(product=> product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
        res.redirect("/productos");
        */
    },
    search: function (req, res){
        db.Products.findOne({
            where: {
                
            }
        }).then((result) => {
            console.log(result)
        })
    }
    
}
    


module.exports = productController
const express = require("express");
const res = require("express/lib/response");
const fs = require("fs");
const path = require ("path");

function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    let productos = JSON.parse(data);
    return productos;
}

function writeFile(array){
    let string = JSON.stringify(array, null, 8);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), string);
}

const productController = {
    index: (req,res) => {
        const productos = findAll();
        res.render("productos", {productos: productos})
    },
    crear: (req,res) => {
        res.render("crearProducto");
    },
    guardar: (req,res) => {
        let products = findAll();

        let newProduct = {
            id: products.length + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            colores: req.body.color,
            talles: req.body.talle,
            precio: req.body.precio,
            descuento: req.body.descuento,
            img: req.body.img
        }

        products.push(newProduct);
        
        writeFile(products);

        res.redirect("/productos")
    },
    ofertas: (req,res) => {
        res.render("ofertas")
    },
    detalle: (req, res) => {
        let productos = findAll();

        let productoEncontrado = productos.find(function(producto){
           return producto.id == req.params.id
        });

        res.render("productDetail", {producto: productoEncontrado});
    },
    carrito: (req, res) => {
        res.render("productCart");
    },
    carrito2:(req, res) => {
        res.render("productCart2");
    },
    finalizar: (req, res) => {
        res.render("confirmacionCompra");
    },
    editar: (req,res) => {
        let productos = findAll();

        let productoEncontrado = productos.find(function(producto){
            return producto.id == req.params.id
         });

        res.render("editarProducto", {producto : productoEncontrado})
    },
    actualizar: (req, res) => {
        let productos = findAll();

        let productoActualizado = productos.map(function(producto){
            if(producto.id == req.params.id){
                producto.nombre = req.body.nombre; 
                producto.descripcion = req.body.descripcion;
                producto.precio = req.body.precio;
                producto.img = req.body.img;   
                producto.categoria = req.body.categoria;
                producto.talles = req.body.talle;
                producto.colores = req.body.color;
                producto.descuento = req.body.descuento;
            }
            return producto;
        })
        //otra forma //
        //let productoEncontrado = products.find (function(producto){
        //    return producto.id == req.params.id
       // })

       // productoEncontrado.nombre = req.body.nombre;
       //producto.descripcion = req.body.descripcion;
       //producto.precio = req.body.precio;
       //producto.archivo = req.body.archivo;   

       writeFile(productos);

       res.redirect ("/productos");
    },

    destroy: function(id){
        let products = this.findAll();

        let productIndex = products.findIndex((product)=>{
            return product.id == id
        })

        products.splice(productIndex, 1);

        this.writeFile(products);

        res.redirect("/productos");
    }
    /*otra forma mas facil
    destroy:(req,res)=>{

        let id=req.params.id;
        let finalProducts = products.filter(product=> product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
        res.redirect("/productos");

    }


    */
}
    


module.exports = productController
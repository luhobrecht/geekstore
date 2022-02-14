const express = require("express");
const path = require ("path");

const productController = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/productos.html"))
    },
    crear: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/admin.html"))
    },
    ofertas: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/ofertas.html"))
    },
    detalle: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"))
    },
    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
    carrito2:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/productCart2.html"));
    },
    finalizar: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/confirmacionCompra.html"));
    },
};

module.exports = productController
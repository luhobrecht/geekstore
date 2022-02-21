const express = require("express");
const fs = require("fs");
const path = require ("path");

function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    let productos = JSON.parse(data);
    return productos;
}

const mainControllers = {
    index: (req,res) => {
        const productos = findAll();
        
        res.render("index", {productos: productos})
    },
    contact: (req,res) => {
        res.render("contacto")
    },
    nosotros: (req,res) => {
        res.render("nosotros")
    },
    legales: (req,res) => {
        res.render("informacionLegal")
    },
    ayuda: (req,res) => {
        res.render("ayuda")
    },
}

module.exports = mainControllers;
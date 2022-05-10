const express = require("express");
const fs = require("fs");
const path = require ("path");
const db = require ("../database/models")


function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    let products = JSON.parse(data);
    return products;
}

const mainControllers = {
    index: (req,res) => {
        db.Products.findAll()
        .then(function(products) {
            return res.render("index", {products: products})
        })
    },
    contact: (req,res) => {
        res.render("contact")
    },
    aboutUs: (req,res) => {
        res.render("about-us")
    },
    legals: (req,res) => {
        res.render("legals")
    },
    help: (req,res) => {
        res.render("help")
    },
}

module.exports = mainControllers;
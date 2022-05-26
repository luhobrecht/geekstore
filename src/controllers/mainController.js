const express = require("express");
const db = require ("../database/models")


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
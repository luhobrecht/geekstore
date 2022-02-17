const express = require("express");

const mainControllers = {
    index:(req, res) => {
        res.render("index");
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
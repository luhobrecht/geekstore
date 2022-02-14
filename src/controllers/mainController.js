const express = require("express");
const path = require ("path");

const mainControllers = {
    index:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    contact: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/contacto.html"))
    },
    nosotros: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/nosotros.html"))
    },
    legales: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/informacionLegal.html"))
    },
    ayuda: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/ayuda.html"))
    },
}

module.exports = mainControllers;
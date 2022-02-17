const express = require("express");
const path = require ("path");

const userController = {
    crear: (req, res) => {
        res.render("register");
    },
    iniciar:(req, res) => {
        res.render("login");
    }
}



module.exports = userController;
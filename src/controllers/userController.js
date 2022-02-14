const express = require("express");
const path = require ("path");

const userController = {
    crear: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"));
    },
    iniciar:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"));
    }
}



module.exports = userController;
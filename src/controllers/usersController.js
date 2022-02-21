const express = require("express");
const path = require ("path");
const fs= require("fs");

function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8")
    let usuarios = JSON.parse(data);
    return usuarios;
}

function writeFile(array){
    let string = JSON.stringify(array, null, 8);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), string);
}

const usersController = {
    index: (req,res) => {
        const users = findAll();
        res.render("usuarios", {users: users})
    },
    crear: (req, res) => {
        res.render("register");
    },
    iniciar:(req, res) => {
        res.render("login");
    },

    guardar: (req, res) => {

            let users = findAll();
    
            let newUser= {
                id: users.length + 1,
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                birthDate: req.body.birthdate,
                domicilio: req.body.domicilio,
                ciudad: req.body.ciudad,
                provincia: req.body.provincia,
                img: req.body.img,
                password: req.body.password,
                passwordConfirm: req.body.password_confirm,
                intereses: req.body.intereses
            }
    
            users.push(newUser);
            
            writeFile(users);
    
            res.redirect("/users/login")
    }
}



module.exports = usersController;
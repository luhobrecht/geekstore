const express = require("express");
const path = require ("path");
const fs= require("fs");

function findAll(){
    let data = fs.readFileSync(path.join(__dirname, "../data/user.json"), "utf-8")
    let usuarios = JSON.parse(data);
    return usuarios;
}

function writeFile(array){
    let string = JSON.stringify(array, null, 8);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), string);
}
const userController = {
    crear: (req, res) => {
        res.render("register");
    },
    iniciar:(req, res) => {
        res.render("login");
    },

    guardar:(req,res) =>{

            let users = findAll();
    
            let newUser= {
                id: users.length + 1,
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                birthDate: req.body.birthdate,
                domicilio: req.body.domicilio,
                img: req.body.archivo,
                password: req.body.password,
                passwordConfirm: req.body.password_confirm
            }
    
            users.push(newUser);
            
            writeFile(users);
    
            res.redirect("/login")
    }
}



module.exports = userController;
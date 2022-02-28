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
        res.render("users", {users: users})
    },
    detalle: (req, res) => {
        let users = findAll();

        let userFound = users.find(function(user){
           return user.id == req.params.id
        });

        res.render("userDetail", {user: userFound});
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
                birthDate: req.body.birthDate,
                direccion: req.body.domicilio,
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
    },
    editar: (req,res) => {
        let users = findAll();

        let userFound = users.find(function(user){
            return user.id == req.params.id
         });

        res.render("editUser", {user : userFound})
    },
    actualizar: (req, res) => {
        let users = findAll();

        let userUpdate = users.map(function(user){
            if(user.id == req.params.id){
                user.name = req.body.name;
                user.user = req.body.user;
                user.email = req.body.email;
                user.birthDate = req.body.birthDate;
                user.domicilio = req.body.domicilio;
                user.ciudad = req.body.ciudad;
                user.provincia = req.body.provincia;
                user.img = req.body.img;
                user.password = req.body.password;
                user.intereses = req.body.intereses;
            }
            return user;
        })

        writeFile(users);

        res.redirect ("/users")
     }        
}



module.exports = usersController;
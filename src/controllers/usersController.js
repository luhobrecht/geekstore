const express = require("express");
const path = require ("path");
const fs= require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require ("bcryptjs");

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
        let users = findAll();
        res.render("users", {users: users})
    },
    
    detail: (req, res) => {
        let users = findAll();

        let userFound = users.find(function(user){
           return user.id == req.params.id
        });

        res.render("userDetail", {user: userFound});
    },

    login:(req, res) => {
        res.render("login");
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let users= findAll();
            for ( let i = 0; i < users.length; i++){
                if (users[i].user == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        userTL = users[i];
                        break;
                    }
                }
            }
            if (userTL == undefined){
                res.render ("login", {errors: [
                    {msg: "Credenciales inválidas"}
                ] })
            }
            req.session.userLoggeado = userTL;
            if(req.body.recordame != undefined){
                res.cookie ("recordame", userLoggeado.user, { maxAge: 300000 })
            }
            res.redirect("/");
        }else {
            res.render ("login", {errors: errors.mapped(), old: req.body })
        }
    },   
    create: (req, res) => {
        res.render("register");
    },
    save: (req, res) => {
        let users = findAll();
        let errors = validationResult(req);
        if(errors.isEmpty()){
        let newUser= {
            id: users.length + 1,
            name: req.body.name,
            user: req.body.user,
            email: req.body.email,
            birthDate: req.body.birthDate,
            adress: req.body.adress,
            city: req.body.city,
            provincia: req.body.provincia,
            img: req.file ? req.file.filename: "default.png",
            password: bcrypt.hashSync(req.body.password, 10),
            passwordConfirm: bcrypt.hashSync(req.body.password_confirm, 10),
            interest: req.body.interest
            }
    
            users.push(newUser);
            
            writeFile(users);
    
            res.redirect("/usuarios/login");
        }else{
            res.render("register", {errors: errors.mapped(), old: req.body});
        }
    },
    edit: (req,res) => {
        let users = findAll();

        let userFound = users.find(function(user){
            return user.id == req.params.id
         });

        res.render("editUser", {user : userFound})
    },
    update: (req, res) => {
        let users = findAll();
        let userUpdate = users.map(function(user){
            if(user.id == req.params.id){
                user.name = req.body.name;
                user.user = req.body.user;
                user.email = req.body.email;
                user.birthDate = req.body.birthDate;
                user.adress = req.body.adress;
                user.city = req.body.city;
                user.provincia = req.body.provincia;
                user.img = req.file ? req.file.filename: "default.png";
                user.password = req.body.password;
                user.password_confirm = req.body.password_confirm,
                user.interest = req.body.interest;
            }
            return user;
        })

        writeFile(users);

        res.redirect ("/usuarios")
        }        
}



module.exports = usersController;
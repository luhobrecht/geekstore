const path = require ("path");
const fs= require("fs");
const { body } = require ("express-validator");
const { Users } =  require('../database/models')
const bcryptjs = require('bcryptjs')

/*function findAll(){
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")));
    return users;
}*/

const userValidations = {
    login:[
        body("user")
        .notEmpty()
        .withMessage("Escribe tu nombre de usuario")
        .custom((value) => {
            return Users.findOne({raw: true, where: {user : value}})
            .then(user => {
                return (user != null ? true : Promise.reject() )
            })                      
        }).withMessage('Usuario o contraseña incorrectos'),
        body("password")
        .notEmpty()
        .withMessage("Ingrese su contraseña")
        .custom((value, {req}) => {
            return Users.findOne({raw: true, where: {user : req.body.user }})
                .then(user => {
                    return bcryptjs.compareSync(value, user.password)
                        .then(passMatch => {
                            return (passMatch == true ? true : Promise.reject())
                        })    
                })                      
        }).withMessage('Usuario o contraseña incorrectos'),
    ],
    register:[
        body("name")
        .notEmpty()
        .withMessage("Escribí tu nombre completo. Ej. Sheldon Cooper")
        .isLength({ min: 2 }).withMessage("El nombre de usuario debe contener al menos dos caracteres"),
        body("email")
        .notEmpty()
        .withMessage("El campo de email no puede quedar vacío")
        .isEmail()
        .withMessage("Escribí tu email con un formato válido. Ej. sheldon@uncorreo.com")
        .bail()
        .custom((value) => {
            return Users.findOne({raw: true, where: {email : value}})
            .then(user => {
                return (user == null ? true : Promise.reject() )
            });                      
        }).withMessage('Este email ya se encuentra registrado'),
        body("user")
        .notEmpty()
        .withMessage("Crea un nombre de usuario. Ej. SheldonCoop")
        .bail()
        .custom((value) => {
            return Users.findOne({raw: true, where: {user : value}})
            .then(user => {
                return (user == null ? true : Promise.reject() )
            })                      
        }).withMessage('Este nombre de usuario no está disponible'),
        body("city")
        .notEmpty()
        .withMessage("Escribí tu ciudad."),
        body("password")
        .notEmpty()
        .withMessage("Elige una contraseña")
        .isLength({min:8})
        .withMessage("La contraseña debe tener al menos 8 caracteres."),
    ]
}

module.exports = userValidations;
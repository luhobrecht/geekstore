const path = require ("path");
const fs= require("fs");
const { body } = require ("express-validator");

function findAll(){
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")));
    return users;
}

const validator = {
    login:[
        body("user")
        .notEmpty()
        .withMessage("Nombre de usuario incorrecto."),
        body("password")
        .notEmpty()
        .withMessage("Contraseña incorrecta."),
    ],
    register:[
        body("name")
        .notEmpty()
        .withMessage("Escribí tu nombre completo. Ej. Sheldon Cooper"),
        body("email")
        .isEmail()
        .withMessage("Escribí tu email con un formato válido. Ej. sheldon@uncorreo.com")
        .bail()
        .custom(function(value){
            let users = findAll();
           let userFound = users.find(function(user){
                return user.email == value 
            })
            if (userFound){
                throw new Error("Este email ya está registrado")
            }
            return true;
        }),
        body("user")
        .notEmpty()
        .withMessage("Crea un nombre de usuario. Ej. SheldonCoop")
        .bail()
        .custom(function(value){
            let users= findAll();
           let userFound = users.find(function(user){
                return user.user == value 
            })
            if (userFound){
                throw new Error("Este nombre de usuario no está disponible")
            }
            return true;
        }),
        body("adress")
        .notEmpty()
        .withMessage("Escribí tu dirección. Ej. Calle Big Bang 12"),
        body("city")
        .notEmpty()
        .withMessage("Escribí tu ciudad."),
        body("provincia")
        .notEmpty()
        .withMessage("Escribí tu provincia."),
        body("password")
        .isLength({min:8})
        .withMessage("La contraseña debe tener al menos 8 caracteres."),
        body("password_confirm")
        .isLength({min:8})
        .withMessage("La contraseña debe tener al menos 8 caracteres.")
    ]
}

module.exports = validator;
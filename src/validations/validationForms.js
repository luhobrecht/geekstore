const { body } = require ("express-validator")

module.exports={
    login:[
        body("user")
        .notEmpty()
        .withMessage("Nombre de usuario incorrecto."),
        body("password")
        .isLength({min:8})
        .withMessage("Contraseña incorrecta."),
    ],
    register:[
        body("name")
        .notEmpty()
        .withMessage("Escribí tu nombre completo. Ej. Sheldon Cooper"),
        body("email")
        .isEmail()
        .withMessage("Escribí tu email con un formato válido. Ej. sheldon@uncorreo.com"),
        body("user")
        .notEmpty()
        .withMessage("Crea un nombre de usuario. Ej. SheldonCoop"),
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
        .withMessage("La contraseña debe tener al menos 8 caracteres."),
    ]
}
const path = require ("path");
const fs= require("fs");
const { body } = require ("express-validator");

const productValidations = {
    create:[
        body("name")
        .notEmpty()
        .withMessage("Escribe el nombre del producto")
        .isLength( {min:5} )
        .withMessage('El nombre debe tener al menos cinco caracteres'),
        body("description")
        .notEmpty()
        .withMessage("Ingrese la descripción del producto")
        .isLength({min:20})
        .withMessage('La descripción debe tener al menos 20 caracteres'),
        body("price")
        .notEmpty()
        .withMessage("Escribe un precio para el producto"),
    ],
    edit:[
        body("name")
        .notEmpty()
        .withMessage("Escribe el nombre del producto")
        .isLength( {min:5} )
        .withMessage('El nombre debe tener al menos cinco caracteres'),
        body("description")
        .notEmpty()
        .withMessage("Ingrese la descripción del producto")
        .isLength({min:20})
        .withMessage('La descripción debe tener al menos 20 caracteres'),
    ]
}

module.exports = productValidations;
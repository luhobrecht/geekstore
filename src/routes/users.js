const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const { body } = require ("express-validator");
const usersController = require ("../controllers/usersController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const validator = require ("../validations/validationForms");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/users");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        console.log(file)
        let imageName = "profilePicture-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});

const upload = multer ({ storage : storage});


// Lista de usuarios 
router.get("/", usersController.index);

// Formulario de inicio de sesión
router.get("/login", usersController.login);
// Formulario procesamiento de inicio de sesión
router.post("/login", validator.login , usersController.processLogin);

// Formulario de registro
router.get("/registro", guestMiddleware, usersController.create);
// Envío de formulario de registro
router.post("/registro", upload.single("img"),validator.register ,usersController.save);

// Detalle de usuario
router.get("/:id", usersController.detail);

// Formulario de edición de usuarios
router.get("/:id/editar", usersController.edit);
// Envío de formulario de edición de usuarios
router.put("/:id/editar", upload.single("img"), usersController.update);

module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const usersController = require ("../controllers/usersController");

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
router.get("/login", usersController.iniciar);

// Formulario de registro
router.get("/register", usersController.crear);
// Envío de formulario de registro
router.post("/register", upload.single("img"), usersController.guardar);

// Detalle de usuario
router.get("/:id", usersController.detalle);

// Formulario de edición de usuarios
router.get("/:id/editar", usersController.editar);
// Envío de formulario de edición de usuarios
router.put("/:id/editar", usersController.actualizar);

module.exports = router;
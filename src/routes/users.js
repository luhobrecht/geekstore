const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const { body } = require ("express-validator");
const usersController = require ("../controllers/usersController");
const guest = require("../middlewares/guest");
const validations = require ("../middlewares/userValidations");

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
router.post("/login", validations.login , usersController.processLogin);
//Logout
router.post("/logout", usersController.logout);
//Profile
router.get("/mi-cuenta", function(req, res){
    if(req.session.userLogueado){
      res.send("user-profile")
    }else{
      res.send("no estas logueado")
    }
  })

// Formulario de registro
router.get("/registro", usersController.create);
// Envío de formulario de registro
router.post("/registro", upload.single("img"), validations.register ,usersController.save);

// Detalle de usuario
router.get("/:id", usersController.detail);

// Formulario de edición de usuarios
router.get("/:id/editar", usersController.edit);
// Envío de formulario de edición de usuarios
router.put("/:id/editar", upload.single("img"), usersController.update);
// Envío de formulario de elminación de usuario
router.delete("/:id/delete", usersController.destroy);

module.exports = router;
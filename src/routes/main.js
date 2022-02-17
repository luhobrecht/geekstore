const express = require("express");
const router = express.Router();
const mainController = require ("../controllers/mainController");

router.get("/", mainController.index)

router.get("/contacto", mainController.contact)

router.get("/about-us", mainController.nosotros)

router.get("/informacion-legal", mainController.legales)

router.get("/ayuda", mainController.ayuda)



module.exports=router;
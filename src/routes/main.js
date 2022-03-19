const express = require("express");
const router = express.Router();
const mainController = require ("../controllers/mainController");

router.get("/", mainController.index)

router.get("/contacto", mainController.contact)

router.get("/about-us", mainController.aboutUs)

router.get("/informacion-legal", mainController.legals)

router.get("/ayuda", mainController.help)



module.exports=router;
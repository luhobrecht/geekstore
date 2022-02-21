const express = require("express");
const router = express.Router();
const usersController = require ("../controllers/usersController");


router.get("/login", usersController.iniciar)

router.get("/register", usersController.crear)

router.post("/register", usersController.guardar)



module.exports=router;
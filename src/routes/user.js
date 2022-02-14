const express = require("express");
const router = express.Router();
const userController = require ("../controllers/userController");


router.get("/register", userController.crear)

router.get("/login", userController.iniciar)



module.exports=router;
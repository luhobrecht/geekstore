const express = require("express");
const router = express.Router();
const usersController = require ("../controllers/usersController");

router.get("/", usersController.index);
router.get("/:id", usersController.detalle)

router.get("/login", usersController.iniciar);

router.get("/register", usersController.crear);
router.post("/register", usersController.guardar);

router.get("/:id/editar", usersController.editar);
router.put("/:id/editar", usersController.actualizar);

module.exports = router;
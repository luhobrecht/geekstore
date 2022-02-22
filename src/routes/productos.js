const express = require("express");
const router = express.Router();
const productController = require ("../controllers/productosController");

router.get("/", productController.index);
router.get("/:id", productController.detalle);

router.get("/crear", productController.crear);
router.post("/crear", productController.guardar);

router.get("/ofertas", productController.ofertas);

router.get("/productCart", productController.carrito);

router.get("/productCart/part-2", productController.carrito2);

router.get("/productCart/confirmCompra", productController.finalizar);

router.get("/:id/editar", productController.editar);
router.put("/:id/editar", productController.actualizar);


module.exports = router;
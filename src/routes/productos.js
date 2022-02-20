const express = require("express");
const router = express.Router();
const productController = require ("../controllers/productosController");

router.get("/", productController.index);

router.get("/productDetail/:id", productController.detalle);

router.get("/crear-producto", productController.crear);
router.post("/crear-producto", productController.guardar);

router.get("/ofertas", productController.ofertas);

router.get("/productCart", productController.carrito);

router.get("/productCart/part-2", productController.carrito2);

router.get("/productCart/confirmCompra", productController.finalizar);

router.get("/editar-producto/:id", productController.editar);
router.put("/editar-producto/:id", productController.actualizar);


module.exports = router;
const express = require("express");
const router = express.Router();
const productController = require ("../controllers/productosController");

router.get("/", productController.index);

router.get("/productDetail/:id", productController.detalle);

router.get("/crear-producto", productController.crear);

router.get("/ofertas", productController.ofertas);

router.get("/productCart", productController.carrito);

router.get("/productCart/part-2", productController.carrito2);

router.get("/productCart/confirmCompra", productController.finalizar);

router.get("/editar-producto", productController.editar);

router.get("/editar-producto/2", productController.editar2);


module.exports = router;
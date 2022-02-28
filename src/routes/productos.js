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

router.get("/editar-producto/:id", productController.editar);
router.put("/editar-producto/:id", productController.actualizar);
router.delete("/delete/:id", productController.destroy);


module.exports = router;
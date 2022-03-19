const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const productController = require ("../controllers/productosController");

const addProduct = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/products");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName = "product-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});
const fileUpload = multer ({ storage : addProduct});

// Lista de productos 
router.get("/", productController.index);

// Formulario de creación de productos 
router.get("/crear", productController.crear);
// Envío de formulario de creación de productos 
router.post("/crear", fileUpload.single("img"), productController.guardar);

// Lista de ofertas 
router.get("/ofertas", productController.ofertas);

// Carrito de compras - vista 1
router.get("/productCart", productController.carrito);
// Carrito de compras - vista 2
router.get("/productCart/part-2", productController.carrito2);
// Confirmación de compra
router.get("/productCart/confirmCompra", productController.finalizar);

// Detalle de producto
router.get("/:id", productController.detalle);

// Formulario de edición de producto
router.get("/:id/editar/", productController.editar);
// Envío de formulario de edición de producto
router.put("/:id/editar/", productController.actualizar);
// Envío de formulario de elminación de producto
router.delete("/:id/delete", productController.destroy);


module.exports = router;
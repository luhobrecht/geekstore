const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const { body } = require ("express-validator");
const productController = require ("../controllers/productsController");
const validations = require ("../middlewares/productValidations");



const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/products");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName = "product-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});
const fileUpload = multer ({ storage : storage});

// Lista de productos 
router.get("/", productController.index);

// Formulario de creación de productos 
router.get("/crear", productController.create);
// Envío de formulario de creación de productos 
router.post("/crear", fileUpload.single("img"), validations.create, productController.save);

// Lista de ofertas 
router.get("/ofertas", productController.offers);

// Carrito de compras - vista 1
router.get("/productCart", productController.cart);
// Carrito de compras - vista 2
router.get("/productCart/purchase", productController.purchase);
// Confirmación de compra
router.get("/productCart/complete", productController.complete);

// Detalle de producto
router.get("/:id", productController.detail);

// Formulario de edición de producto
router.get("/:id/editar/", productController.edit);
// Envío de formulario de edición de producto
router.put("/:id/editar/", fileUpload.single("img"), validations.edit, productController.update);
// Envío de formulario de elminación de producto
router.delete("/:id/delete", productController.destroy);


module.exports = router;
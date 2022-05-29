const express= require("express");
const router= express.Router();
const apiController= require("../api/apiController");

//endpoints users

//list users GET path: /users
router.get("/users", apiController.listUsers)

//get user by id path: /users/:id
router.get("/users/:id", apiController.getUserByID)

//endpoint products

router.get("/products", apiController.listProducts)
router.get("/products/:id", apiController.getProductByID)

module.exports = router
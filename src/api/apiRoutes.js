const express= require("express");
const router= express.Router();
const apiController= require("../api/apiController");

//endpoints users

//list users GET path: /users
router.get("/users", apiController.usersList)

//get user by id path: /users/:id
router.get("/users/:id", apiController.userDetail)

//endpoint products

router.get("/products", apiController.productsList)
router.get("/products/:id", apiController.productDetail)

module.exports = router
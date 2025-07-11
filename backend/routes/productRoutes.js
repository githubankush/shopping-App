const express = require("express");
const router = express.Router();
const {getAllProductsPublic,getProductByIdPublic,searchProductsPublic} = require("../controllers/productController");

// ✅ Public route for frontend users
router.get("/", getAllProductsPublic);
router.get("/search", searchProductsPublic);
router.get("/:id" ,getProductByIdPublic);

module.exports = router;

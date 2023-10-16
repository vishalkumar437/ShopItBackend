const {Router}= require("express");
const {insertProduct, getProductByCategory, getProductById, searchProductByName, getProductBySubCategory} = require("../Controller/productHandler");

const router= Router();

router.post("/insertProduct",insertProduct);
router.get("/products",getProductByCategory);
router.get("/product",getProductById);
router.post("/searchByName",searchProductByName);
router.get("/getProductBySubCategory",getProductBySubCategory);

module.exports=router;
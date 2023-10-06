const {Router} = require("express");
const {addProductInCart,getCart, updateProductQuantity, getCartQuantity} = require("../Controller/cartHandler");
const router = Router();

router.put("/addtocart",addProductInCart);
router.get("/getcart",getCart);
router.post("/updateProductQuantity",updateProductQuantity);
router.get("/getCartQuantity",getCartQuantity);

module.exports = router;
const express=require("express")
const router=express.Router();
const {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct
}   =   require("../controllers/productController")

router.route("/").get(getAllProducts).post(createProduct);

// router.route("/");

router.route("/:id").get(getAProduct).put(updateProduct).delete(deleteProduct);

// router.route("/:id");

// router.route("/:id");


module.exports=router;
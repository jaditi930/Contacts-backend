const express=require("express")
const router=express.Router();
const {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct
}   =   require("../controllers/productController")

router.route("/").get(getAllProducts);

router.route("/").post(createProduct);

router.route("/:id").get(getAProduct);

router.route("/:id").put(updateProduct);

router.route("/:id").delete(deleteProduct);


module.exports=router;
const express=require("express")

const router=express.Router();
const {signUpUser,loginUser,getUser}=require("../controllers/userController")
const validateToken =require("../middleware/tokenHandler")
router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.get("/current",validateToken,getUser)
module.exports=router;

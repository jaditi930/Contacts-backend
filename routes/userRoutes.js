const express=require("express")
const router=express.Router();
const {signUpUser,loginUser,getUser}=require("../controllers/userController")

router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.get("/:username",getUser)

module.exports=router;
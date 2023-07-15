const express=require("express")
const sls=require("serverless-http")

const router=express.Router();
const {signUpUser,loginUser,getUser}=require("../controllers/userController")
const validateToken =require("../middleware/tokenHandler")
router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.get("/current",validateToken,getUser)
app.use("/.netlify/functions/api",router)
module.exports=router;
module.exports.handler=sls(http);
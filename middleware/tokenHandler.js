const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const test = require('dotenv').config()
const validateToken=asyncHandler(async (req,res,next)=>{
  // console.log(req.headers.cookie)
  // let token=req.cookies.token;
  // console.log(token)
  // let authHeader = req.headers.Authorization || req.headers.authorization;
  // if (authHeader && authHeader.startsWith("Bearer")) {
    // token = authHeader.split(" ")[1];
    const cookiesArray = req.headers.cookie.split(';');
    const cookies={}
    cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = value;
    });
    let token=cookies['token']
    secret_key=test.parsed['SECRET_KEY']
    if (!token) {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
      }
    jwt.verify(token,secret_key, (err, decoded) => {
      if (err) {
        console.log(err.message)
        res.status(401);
        throw new Error("User is not authorized");
      }
      console.log("user validated")
      req.user = decoded.user;
      next();
    });
  // }
})
module.exports = validateToken;
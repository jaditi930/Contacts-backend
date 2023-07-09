const asyncHandler=require("express-async-handler")
const User=require("../models/userModel")
const Contact=require("../models/contactModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

// @desc Sign Up User
// @access public
// @route POST /api/users/signup

const signUpUser=asyncHandler(async (req,res)=>{
    const {username,password}=req.body
    const userAvailable = await User.findOne({ username:username });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
    const hashed_password=await bcrypt.hash(password,10)
    let newUser=""
    newUser= await User.create({username,password:hashed_password})
    if(!newUser)
    {
        res.status(400);
    throw new Error("User data us not valid");
    }
    console.log(newUser)
    res.status(200).json(newUser)
})

// @desc Login user
// @access public
// @route POST /api/users/login
const loginUser= asyncHandler(async (req,res)=>{
    const {username,password}=req.body
    if(!username||!password)
    {
        res.status(400)
        throw new Error("Please enter username and password")
    }
    const user=await User.findOne({username:username})
    if(!user)
    {
        res.status(404)
        throw new Error("Username does not exist")
    }
    const hashed_password=await bcrypt.compare(password,user.password)
    if(!hashed_password)
    {
        res.status(400)
        throw new Error("Username or password is wrong")
    }
    const accessToken=jwt.sign({
        user:{
            username:user.username
    }},process.env.SECRET_KEY,{
        expiresIn:"15m"
    })
    res.status(200).json({
        "accessToken":accessToken
    })
})

// @desc Display all contacts of current user
// @access private
// @route GET /api/users/current
const getUser= asyncHandler(async(req,res)=>{
console.log("user")
    console.log(req.user)
    const contacts=await Contact.findMany({username:req.user.username})
    if(!contacts)
    {
        res.json({"message":"No contacts found"})
    }
    res.status(200).json(contacts)
})

// // @desc Logout User
// // @access private
// // @route GET /api/users/logout
// const deleteContact= asyncHandler(async(req,res)=>{
//     const contact=await Contact.findOne({name:req.params.name})
//     if(!contact){
//         res.status(404);
//         throw new Error("Contact not found")
//     }
//     await Contact.deleteOne({name:req.params.name})
//     res.status(200).json({message:"User logged out successfully"})
// })
module.exports={signUpUser,loginUser,getUser};
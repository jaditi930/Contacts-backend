const asyncHandler=require("express-async-handler")
const Product=require("../models/productsModel")

// @desc Get all products
// @access public
// @route GET /api/products

const getAllProducts=asyncHandler(async (req,res)=>{
    const products=await Product.find()
    res.status(200).json(products)
})

// @desc Get product with id
// @access public
// @route GET /api/products/:id
const getAProduct= asyncHandler(async (req,res)=>{
    const product=await Product.findOne({id:req.params.id})
    if(!product){
        res.status(404);
        throw new Error("Product not found")
    }
    res.status(200).json(product)
})

// @desc Create new product
// @access public
// @route POST /api/products

const createProduct=asyncHandler(async(req,res)=>{
    const {name,inStock,price}=req.body
    console.log(name,inStock,price)
    if(!name||!inStock||!price)
    {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const id=1
    const newProduct=await Product.create({id,name,inStock,price})
    console.log("added")
    res.status(200).json(newProduct)
})


// @desc Update product with id
// @access public
// @route PUT /api/products/:id
const updateProduct= asyncHandler(async(req,res)=>{
    const product=await Product.findOne({id:req.params.id})
    if(!product){
        res.status(404);
        throw new Error("Product not found")
    }
    const filter={id:req.params.id}
    const updatedProduct=await Product.findOneAndUpdate(filter,
    req.body,{
        new:true
    })
    res.status(200).json(updatedProduct)
})

// @desc Delete product with id
// @access public
// @route DELETE /api/products/:id
const deleteProduct= asyncHandler(async(req,res)=>{
    const product=await Product.findOne({id:req.params.id})
    if(!product){
        res.status(404);
        throw new Error("Product not found")
    }
    await Product.deleteOne({id:req.params.id})
    res.status(200).json({message:"Product deleted successfully"})
})
module.exports={getAllProducts,getAProduct,createProduct,updateProduct,deleteProduct};
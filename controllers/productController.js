const asyncHandler=require("express-async-handler")
// @desc Get all products
// @access public
// @route GET /api/products

const getAllProducts=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Get all products"})
})

// @desc Get product with id
// @access public
// @route GET /api/products/:id
const getAProduct= asyncHandler(async (req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} found successfully`})
})

// @desc Create new product
// @access public
// @route POST /api/products
const createProduct=asyncHandler(async(req,res)=>{
    const {name,inStock,price}=req.body
    if(!name||!inStock||!price)
    {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({message:"Product created successfully"})
})


// @desc Update product with id
// @access public
// @route PUT /api/products/:id
const updateProduct= asyncHandler(async(req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} updated successfully`})
})

// @desc Delete product with id
// @access public
// @route DELETE /api/products/:id
const deleteProduct= asyncHandler(async(req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} deleted successfully`})
})
module.exports={getAllProducts,getAProduct,createProduct,updateProduct,deleteProduct};
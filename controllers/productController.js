// @desc Get all products
// @access public
// @route GET /api/products

const getAllProducts=(req,res)=>{
    res.status(200).json({message:"Get all products"})
}

// @desc Get product with id
// @access public
// @route GET /api/products/:id
const getAProduct= (req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} found successfully`})
}

// @desc Create new product
// @access public
// @route POST /api/products
const createProduct=(req,res)=>{
    res.status(200).json({message:"Product created successfully"})
}


// @desc Update product with id
// @access public
// @route PUT /api/products/:id
const updateProduct= (req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} updated successfully`})
}

// @desc Delete product with id
// @access public
// @route DELETE /api/products/:id
const deleteProduct= (req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} deleted successfully`})
}
module.exports={getAllProducts,getAProduct,createProduct,updateProduct,deleteProduct};
const mongoose=require("mongoose")
const productSchema = mongoose.Schema(
    { 
      id:{
        type:Number,
        unique:true,
        required:[true,"Please enter id"]
      },
      name: {
        type: String,
        required: [true, "Please add the product name"],
      },
      inStock: {
        type: Number,
        required: [true, "Please add inStock"],
      },
      price: {
        type: Number,
        required: [true, "Please add the price"],
      },
    }
  );
  module.exports = mongoose.model("Product", productSchema);
const mongoose=require("mongoose")
// const User=require("../models/userModel")
const contactSchema = mongoose.Schema(
    { 
      username:{
        type:String,
        ref:'User'
      },
      name: {
        type: String,
        unique: true,
        required: [true, "Name is required"],
      },
      phoneNumber: {
        type: Number,
        required: [true, "Phone Number is required"],
      },
      emailAddress: {
        type: String,
        required: false,
      },
    }
  );
  module.exports = mongoose.model("Contact", contactSchema);
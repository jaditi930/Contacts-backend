const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

// @desc Get all contacts
// @access public
// @route GET /api/contacts

const getAllContacts=asyncHandler(async (req,res)=>{
    const contacts=await Contact.find()
    res.status(200).json(contacts)
})

// @desc Get contact with name
// @access public
// @route GET /api/contacts/:name
const getAContact= asyncHandler(async (req,res)=>{
    console.log(req.params.name)
    const contact=await Contact.findOne({name:req.params.name})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

// @desc Create new contact
// @access public
// @route POST /api/contacts

const createContact=asyncHandler(async(req,res)=>{
    const {name,phoneNumber,emailAddress}=req.body
    if(!name||!phoneNumber)
    {
        res.status(400)
        throw new Error("Name and Phone Number are mandatory")
    }
    if(emailAddress)
        {
        const newContact=await Contact.create({name,phoneNumber,emailAddress})
        res.status(200).json(newContact)
    }
    else
    {
        const newContact=await Contact.create({name,phoneNumber})
        res.status(200).json(newContact)
    }
})


// @desc Update contact with name
// @access public
// @route PUT /api/contacts/:name
const updateContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findOne({name:req.params.name})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const filter={name:req.params.name}
    const updatedContact=await Contact.findOneAndUpdate(filter,
    req.body,{
        new:true
    })
    console.log(updateContact)
    res.status(200).json(updatedContact)
})

// @desc Delete contact with name
// @access public
// @route DELETE /api/contacts/:name
const deleteContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findOne({name:req.params.name})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.deleteOne({name:req.params.name})
    res.status(200).json({message:"Contact deleted successfully"})
})
module.exports={getAllContacts,getAContact,createContact,updateContact,deleteContact};
const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

// @desc Get all contacts
// @access private
// @route GET /api/contacts

const getAllContacts=asyncHandler(async (req,res)=>{
    const contacts=await Contact.find({username:req.user.username})
    for(let i=0;i<contacts.length;i++){
        if(contacts[i]["emailAddress"]==null)
        contacts[i]["emailAddress"]=""
    }
    res.status(200).json(contacts)
})

// @desc Get contact with id
// @access private
// @route GET /api/contacts/:id
const getAContact= asyncHandler(async (req,res)=>{
    console.log(req.params.name)
    const contact=await Contact.findOne({username:req.user.username,id:req.params.id})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

// @desc Create new contact
// @access private
// @route POST /api/contacts

const createContact=asyncHandler(async(req,res)=>{
    const {name,phoneNumber,emailAddress}=req.body
    if(!name||!phoneNumber)
    {
        res.status(400)
        throw new Error("Name and Phone Number are mandatory")
    }
    console.log(emailAddress)
    if(emailAddress)
        {
            console.log("c")
        const newContact=await Contact.create({username:req.user.username,name,phoneNumber,emailAddress})
        console.log(newContact)
        res.status(200).json(newContact)
    }
    else
    {   
        const newContact=await Contact.create({username:req.user.username,name,phoneNumber})
        newContact["emailAddress"]="";
        res.status(200).json(newContact)
    }
})


// @desc Update contact with id
// @access public
// @route PUT /api/contacts/:id
const updateContact= asyncHandler(async(req,res)=>{
        const contact=await Contact.findOne({username:req.user.username,_id:req.params.id})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const filter={username:req.user.username,_id:req.params.id}
    const updatedContact=await Contact.findOneAndUpdate(filter,
    req.body,{
        new:true
    })
    console.log(updateContact)
    console.log("hello")
    res.status(200).json(updatedContact)
})

// @desc Delete contact with id
// @access private
// @route DELETE /api/contacts/:id
const deleteContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findOne({username:req.user.username,_id:req.params.id})
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    console.log(contact)
    await Contact.deleteOne({username:req.user.username,_id:req.params.id})
    res.status(200).json({message:"Contact deleted successfully"})
})
module.exports={getAllContacts,getAContact,createContact,updateContact,deleteContact};
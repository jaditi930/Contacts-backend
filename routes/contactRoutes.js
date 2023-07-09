const express=require("express")
const router=express.Router();
const {
    getAllContacts,getAContact,createContact,updateContact,deleteContact
}   =   require("../controllers/contactController")

router.route("/").get(getAllContacts).post(createContact);

// router.route("/");

router.route("/:name").get(getAContact).put(updateContact).delete(deleteContact);

// router.route("/:id");

// router.route("/:id");


module.exports=router;
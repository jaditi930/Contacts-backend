const express=require("express");
const sls=require("serverless-http")
const router=express.Router();
const {
    getAllContacts,getAContact,createContact,updateContact,deleteContact
}   =   require("../controllers/contactController")
const validateToken=require("../middleware/tokenHandler")

router.use(validateToken);


router.route("/").get(getAllContacts).post(createContact);

// router.route("/");

router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);

// router.route("/:id");

// router.route("/:id");

app.use("/.netlify/functions/api",router)
module.exports=router;
module.exports.handler=sls(http);
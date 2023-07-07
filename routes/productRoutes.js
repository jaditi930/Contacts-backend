const express=require("express")
const router=express.Router()

router.route("/").get((req,res)=>{
    res.status(200).json({message:"Get all products"})
});

router.route("/").post((req,res)=>{
     res.status(200).json({message:"Product created successfully"})

});

router.route("/:id").put((req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} updated successfully`})
});

router.route("/:id").delete((req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} deleted successfully`})
});


module.exports=router;
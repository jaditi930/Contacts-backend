const express=require("express")
const dotenv=require("dotenv").config()

const app=express()
const port=process.env.PORT

app.get("/api/products/",(req,res)=>{
    res.status(200).json({message:"Get all products"})
})

app.post("/api/products/",(req,res)=>{
    res.status(200).json({message:"Product created successfully"})
})
app.put("/api/products/:id/",(req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} updated successfully`})
})
app.delete("/api/products/:id/",(req,res)=>{
    id=req.params.id
    res.status(200).json({message:`Product ${id} deleted successfully`})
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
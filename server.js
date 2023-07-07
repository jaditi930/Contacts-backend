const express=require("express")
const dotenv=require("dotenv").config()
const errorHandler=require("./middleware/errorHandler")
const app=express()
const port=process.env.PORT

// for getting user data from request object before the call of the router
app.use(express.json())

// for routes
app.use("/api/products",require("./routes/productRoutes"))

// for error handling
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
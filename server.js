const express=require("express")
const dotenv=require("dotenv").config()
const errorHandler=require("./middleware/errorHandler")
const app=express()
const connectDb=require("./dbConnection")

const port=process.env.PORT

//connect to database
connectDb()

// for getting user data from request object before the call of the router
app.use(express.json())

// for routes
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))


// for error handling
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
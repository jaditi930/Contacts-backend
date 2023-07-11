const express=require("express")
const dotenv=require("dotenv").config()
const errorHandler=require("./middleware/errorHandler")
const app=express()
const connectDb=require("./dbConnection")
const bodyParser = require('body-parser');
const cors=require('cors');
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

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
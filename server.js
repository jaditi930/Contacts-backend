const express=require("express")
const dotenv=require("dotenv").config()
const errorHandler=require("./middleware/errorHandler")
const app=express()
const cors=require("cors")
const connectDb=require("./dbConnection")
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use(bodyParser.json());
const port=process.env.PORT

//connect to database
connectDb()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            

}
// for getting user data from request object before the call of the router
app.use(express.json())

app.use(cors(corsOptions));

// for routes
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))


// for error handling
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

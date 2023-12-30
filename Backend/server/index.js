const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routes 
app.use('/',userRoutes);

mongoose.connect("mongodb+srv://gillyatin:test1234@yobro.zxpjuwp.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to Data Base");
    app.listen(process.env.PORT, () => {console.log(`server running on ${process.env.PORT}`)});
}).catch(err => console.log(err));



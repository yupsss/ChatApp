const { Mongoose, default: mongoose } = require('mongoose');
const User = require('../model/userModel');

const registerUser = async (req, res) => {
    console.log(req.body);
    
    try {
        const obj = await User.create(req.body);
        console.log("user added successfully")
        res.status(200).json(obj);
    } catch (error) {
        
        console.log("error");
        
        if(error.code === 11000)
        res.status(400).json({error : "duplicate email"});
        else
        res.status(400).json({error : "error"});
    }
};

const loginUser = async(req,res) =>{
    console.log(req.body);

    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });
        if(user.password === password)
        {
            console.log("login successfull")
            res.status(200).json({mssg:"login successfull"});
        }
        
        else
        {
            console.log("incorrect password")
            res.status(400).json({error:"incorrect password"});
        }
        }
        catch(error){
            console.log(error);
            res.status(400).json({error:"register first"});
            }
};

module.exports ={registerUser , loginUser};
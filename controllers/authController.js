const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req,res) => {
    try{
        const { username , email , password } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });
        res.status(201).json({
            message:"user registered successfully"
        });


    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
    
};

const loginUser = async (req,res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"invalid credentials"
            });

        }
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );
        if(!isMatch){
            return res.status(400).json({
                message:"invalid credentials"
            });
        }
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        res.status(200).json({
            message:"Login Successfull",
            token
        });


    }catch(error){
        res.status(500).json({
            message:error.message

        });
    }
};

const getProfile = async (req,res) => {
    try{
        const user = await User
            .findById(req.user.id)
            .select("-password");
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }

};

module.exports = {
    registerUser,
    loginUser,
    getProfile
    
};
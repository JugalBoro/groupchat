const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const User = require('../models/users');

exports.userSignUp = (req,res,next) =>{
    const {name, email, phone, password} = req.body;

    const saltround  = 10;
    bcrypt.genSalt(saltround, function(err,salt){
        if(err){
            console.log(err);
        }
        User.create({name,email,phone,password})
        .then(res=>{
            res.status(201).json({message:"user created successfully", success:true,response:res});
        })
        .catch(err=>{
            console.log(err);
        })

    })
}






function generateToken(id){
    return jwt.sign(id, process.env.JWT_TOKEN_SECRET)
}
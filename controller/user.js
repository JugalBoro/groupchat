const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const User = require('../models/users');

exports.userSignUp = (req,res,next) =>{
    const {name, email, phone, password} = req.body;

    const saltround  = 10;
    bcrypt.genSalt(saltround,function(err,salt){
        bcrypt.hash(password,salt,function(err,hash){
            if(err){
                console.log(err);
            }
            User.create({name,email,phone,password:bcrypt.hash})
            .then(res=>{
                res.status(201).json({message:"user created successfully", success:true,response:res});
            })
            .catch(err=>{
                console.log(err);
            })
        })
        

    })
}



exports.userLogin = (req,res,next) =>{
    const {email, password} = req.body;
    User.findAll({where:{email}})
    .then(user=>{
        if(user.length>0){
            bcrypt.compare(password,user[0].password,function(err,response){
                if(err){
                    console.log(err)
                }

                else if(response){

                    const jwtToken = generateToken(user[0].id)

                    return response.status(200).json({token:jwtToken,success:true,message:'Logged in Successfully'})
                }

                else{
                    return response.status(400).json({message:'something went worng', success:false});
                }
            })
        }
    })

    .catch(err=>{
        console.log(err)
    })

}



function generateToken(id){
    return jwt.sign(id, process.env.JWT_TOKEN_SECRET)
}
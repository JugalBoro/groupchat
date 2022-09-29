const jwt =require('jsonwebtoken');

const User =  require('../models/users');

exports.auth = (req,res,next) =>{
    const token = req.header('authToken');
    console.log(token,"authen");

   try{
    const userId = Number(jwt.verify(token, process.env.JWT_TOKEN_SECRET));

    User.findByPk(userId)
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        console.log(err);
    })
   }
   catch(error){
    return res.status(401).json({message:'something went wrong', sucess:false})
   }
}
const User = require('../models/user');

const Message = require('../models/message');


const Sequelize = require('sequelize');



// algo:   1. create an array for storage of all users
//         2. Find in DB all the users using promise and push in array  and on sucess sent 200 http code
//         3. on failure send 400 http code


exports.getUser =(req,res,next) =>{


    let allUsers = [];

    User.findAll()

    .then(users=>{
        users.forEach(user=>{
            allUsers.push(user.name);
        })
        return res.status(200).json({listOfUser:allUsers});
    })

    .catch(err=>{
        console.log(err);
        return res.status(400).json({message:"something went wrong", success:false})
    })
}

// algo:   1. get the sender name and message
//         2: using promise create an function where sender and message as an argument
//         3:on success send 201 http code , on failure send 400 http code


exports.postMessage =(req,res,next)=>{
    const senderName =  req.user.name;

    const {message} = req.body;

    req.user.createMessage({senderName, message})

    .then(msg=>{
        return res.status(201).json({message:msg,success:true})

    })

    .catch(err=>{
        console.log(err)
        res.status(400).json({message:err, success:false})
    })
}


// algo:   1: use async await since it will take time to get all messages from DB
//         2: use try catch block:
//             in try block: get the id and message and search in DB
//             on succesfull case sent 200 http code

//             in catch block: show the error and print http code 400

exports.getMessage = async (req,res,next) =>{
    try{
        const messageId = req.query.id;
        const messages = await Message.findAll({where:{id:messageId}});
        res.status(200).json({sucess:true, message:messages});
    }
    catch(err){
        console.log(err);
        res.status(401).json({message:err,sucess:false});
    }
}











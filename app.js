const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

//const bodyparser = require('body-parser');

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());


//DB calls from app.js or main file
const sequelize = require('./util/database');
const User = require('./models/user');
const Message = require('./models/message')


//Routers
const userRoutes = require('./routes/user');

const chatRoute = require('./routes/messageTab')



app.use('/user',userRoutes);
app.use('/chat',chatRoute);

//Relation with Message and User

User.hasMany(Message);
Message.belongsTo(User);



sequelize
.sync()
.then(()=>{
    app.listen(4000);
})
.catch((err)=>{
    console.log(err);
})
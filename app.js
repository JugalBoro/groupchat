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
//const User = require('./models/users');


//Routers
const userRoutes = require('./routes/user');


app.use('/user',userRoutes);

sequelize
.sync()
.then(()=>{
    app.listen(4000);
})
.catch((err)=>{
    console.log(err);
})
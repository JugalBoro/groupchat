const Sequelize = require('Sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD,{
    dialect:'mysql',
    host:'localhost'
})

module.exports =sequelize;
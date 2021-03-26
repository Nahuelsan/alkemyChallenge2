const Sequelize = require('sequelize');

const sequelize = new Sequelize('alkemyChallenge','root','toor', { 
    operatorsAliases: false ,
    dialect: 'mysql',
    host:'localhost'
});


module.exports = sequelize;

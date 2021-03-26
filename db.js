const Sequelize = require('sequelize');

const sequelize = new Sequelize('alkemyChallenge','NSM','7h1eczmu', { 
    operatorsAliases: false ,
    dialect: 'mysql',
    host:'localhost'
});


module.exports = sequelize;
const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img:{
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_publicacion: {
            type: DataTypes.STRING,
            allwoNull: fale
        }
        
    });
};
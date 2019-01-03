const connect = require('../connect');
const sequelize = require('sequelize');

const User = require('./user');

function init(){
    const Password = connect.db.define('password' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        password : {
            type : sequelize.DataTypes.STRING(150),
            allowNull: true
        },
        type : {
            type : sequelize.DataTypes.STRING(10),
            allowNull : false
        }
    });

    Password.belongeTo(User);

    return Password;
}




module.exports = init();

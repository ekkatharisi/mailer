const connect = require('../connect')
const sequelize = require('sequelize');
const Task = require('./task');
const User = require('./user');
const Date = require('./date');
const File = require('./file');


function init(){
    const Email = connect.db.define('email' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        to : {
            type : sequelize.DataTypes.STRING(2000),
            allowNull : false,
            defaultValue : ""
        },
        subject : {
            type : sequelize.DataTypes.STRING(1500),
            allowNull : false,
            defaultValue : ""
        },
        text : {
            type : sequelize.DataTypes.STRING(3000),
            allowNull : false,
            defaultValue : ""
        },
        html : {
            type : sequelize.DataTypes.STRING(7000),
            allowNull : false,
            defaultValue : ""
        }
    });

    Email.belongsToMany(User , {through : Task});
    Email.belongsToMany(Date , {through : Task});

    Email.hasMany(File);
    return Email;
}

module.exports = init();

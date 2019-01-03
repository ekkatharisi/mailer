const connect = require('../connect')
const sequelize = require('sequelize');
const Email = require('./email');
const Task = require('./task');
const Date = require('./date');
const Role = require('./role');
const UserRole = require('./userRole');
const Password = require('./password');

function init() {
    const User = connect.db.define('user' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        full_name : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        },
        email : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });

    User.belongsToMany(Email , {through : Task});
    User.belongsToMany(Date , {through : Task});

    User.belongsToMany(Role , {through : UserRole});

    User.hasOne(Password);


    return User;
};

module.exports = init();


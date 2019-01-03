const connect = require('../connect')
const sequelize = require('sequelize');
const User = require('./user');
const UserRole = require('./userRole');

function init(){
    const Role = connect.db.define('role' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });

    Role.belongsToMany(User , {through : UserRole});
}

module.exports = init();

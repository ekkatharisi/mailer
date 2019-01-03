const connect = require('../connect')
const sequelize = require('sequelize');
const Email = require('./email');
const Task = require('./task');
const User = require('./user');

function init()
{
    const Date = connect.db.define('date' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        starting_date : {
            type : sequelize.DataTypes.DATE,
            allowNull : true,
            defaultValue : null
        },
        ending_date : {
            type : sequelize.DataTypes.DATE,
            allowNull : true,
            defaultValue: null
        },
        now : {
            type : sequelize.DataTypes.BOOLEAN,
            allowNull : true,
            defaultValue : true
        }
    });

    Date.belongsToMany(Email , {through : Task});
    Date.belongsToMany(User , {through : Task});

    return Date;
}


module.exports = init();

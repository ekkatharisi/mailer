const connect = require('../connect')
const sequelize = require('sequelize');

function init()
{
    const Task = connect.db.define('task' , {
        status : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });
    return Task;
};


module.exports = init();
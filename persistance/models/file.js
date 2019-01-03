const connect = require('../connect')
const sequelize = require('sequelize');
const Email = require('./email')

function init(){
    const File = connect.db.define('file' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        path : {
            type : sequelize.DataTypes.STRING(100),
            allowNull: false,
        }
    });

    File.belongsTo(Email);

    return File;
}

module.exports = init();


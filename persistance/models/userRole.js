const connect = require('../connect')
const sequelize = require('sequelize');

function init()
{
    const UserRole = connect.db.define('user_role' , {});

    return UserRole;
}

module.exports = init();
const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

function init()
{
    const UserRole = sequelize.define('user_role' , {});

    return UserRole;
}

module.exports = init();
const db = require('../connect');
const Sequelize = connect.Sequelize;


function init()
{
    const Task = db.define('task' , {
        status : {
            type : Sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });
    return Task;
};


module.exports = init();
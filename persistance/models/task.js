const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;



function init()
{
    console.log(JSON.stringify(db));
    const Task = sequelize.define('task' , {
        status : {
            type : Sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });

    return Task;
};

module.exports = init();
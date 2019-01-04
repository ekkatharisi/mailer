const db = require('../connect');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;


function init()
{
    const Date = sequelize.define('date' , {
        id : {
            type : Sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        starting_date : {
            type : Sequelize.DataTypes.DATE,
            allowNull : true,
            defaultValue : null
        },
        ending_date : {
            type : Sequelize.DataTypes.DATE,
            allowNull : true,
            defaultValue: null
        },
        now : {
            type : Sequelize.DataTypes.BOOLEAN,
            allowNull : true,
            defaultValue : true
        }
    });

    Date.associate = function(models){
        Date.belongsToMany(models.email , {through : models.task});
        Date.belongsToMany(models.user , {through : models.task});
    };

    return Date;
}


module.exports = init();

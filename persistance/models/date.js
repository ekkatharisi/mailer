const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;


function init()
{

    console.log(sequelize);
    const Date = sequelize.define('date' , {
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

    Date.associate = function(models){
        Date.belongsToMany(models.email , {through : models.task});
        Date.belongsToMany(models.user , {through : models.task});
    };

    return Date;
}


module.exports = init();

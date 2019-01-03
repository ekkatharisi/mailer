const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;


function init(sequelize){
    const Email = sequelize.define('email' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        to : {
            type : sequelize.DataTypes.STRING(2000),
            allowNull : false,
            defaultValue : ""
        },
        subject : {
            type : sequelize.DataTypes.STRING(1500),
            allowNull : false,
            defaultValue : ""
        },
        text : {
            type : sequelize.DataTypes.STRING(3000),
            allowNull : false,
            defaultValue : ""
        },
        html : {
            type : sequelize.DataTypes.STRING(7000),
            allowNull : false,
            defaultValue : ""
        }
    });

    Email.associate = function(models){
        Email.belongsToMany(models.user , {through : models.task});
        Email.belongsToMany(models.date , {through : models.task});
        Email.hasMany(models.file);
    };



    return Email;
}

module.exports = init(sequelize);

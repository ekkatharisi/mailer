const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

function init(){
    const Role = sequelize.define('role' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });

    Role.associate = function(models){
        Role.belongsToMany(models.user , {through : models.user_role});
    };

    return Role;
}

module.exports = init();

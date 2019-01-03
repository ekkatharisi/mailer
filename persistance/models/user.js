const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

function init() {
    const User = sequelize.define('user' , {
        id : {
            type : sequelize.DataTypes.BIGINT(5),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        full_name : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        },
        email : {
            type : sequelize.DataTypes.STRING(30),
            allowNull : false
        }
    });

    User.associate = function(models){

        User.belongsToMany(models.email , {through : models.task});
        User.belongsToMany(models.date , {through : models.task});

        User.belongsToMany(models.role , {through : models.user_role});

        User.hasOne(models.password);
    };



    return User;
};

module.exports = init();


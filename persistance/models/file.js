const db = require('../connect');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

function init(){
    const File = sequelize.define('file' , {
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

    File.associate = function(models){
        File.belongsTo(models.email);
    };
    return File;
}

module.exports = init();


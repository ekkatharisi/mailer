const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = 'development';
const config = require('../config/config')[env];

const sequelize  = new Sequelize(config.database.database_name, config.database.username, config.database.password, config.database.database_config);

var db = {
    sequelize : sequelize,
    Sequelize : Sequelize
};

fs.readdirSync("./models/").filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    var model = sequelize.import(path.join("./models", file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.authenticate().then(() => {
    console.log('database worked !!!');
}).catch(error => {
    console.log(error.stack);
});


module.exports = db;

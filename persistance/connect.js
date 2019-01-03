'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = 'development';
var config = require('../config/config')[env];
var db = {};

var sequelize = new Sequelize(config.database.database_name, config.database.username, config.database.password, config.database.database_config);

fs.readdirSync("./models/").filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    var model = sequelize['import'](path.join("./models/", file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


module.exports.db.authenticate().then(() => {
    console.log('database worked !!!');
}).catch(error => {
    console.log(error.stack);
});
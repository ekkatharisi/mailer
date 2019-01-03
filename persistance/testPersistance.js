const sequelize = require('sequelize');
const connect = require('./connect');

const Task = require('./models/task');
const User = require('./models/user');
const Date = require('./models/date');
const File = require('./models/file');
const UserRole = require('./models/userRole');
const Password = require('./models/password');
const Role = require('./models/role');
const Email = require('./models/email');




connect.db.sync({force : true}).then(res => {
        console.log('database synchronized !!');
}).catch(err => {
    console.error(err.stack);
});
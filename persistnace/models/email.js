const connect = require('../connect');
const sequelize = require('sequelize');
const dataTypes = sequelize.DataTypes;

const Email = connect.db.define('email' , {
    to : {
        type : dataTypes.STRING(2000),
        allowNull : false,
        defaultValue : ""
    },
    subject : {
        type : dataTypes.STRING(1500),
        allowNull : false,
        defaultValue : ""
    },
    text : {
        type : dataTypes.STRING(3000),
        allowNull : false,
        defaultValue : ""
    },
    html : {
        type : dataTypes.STRING(7000),
        allowNull : false,
        defaultValue : ""
    }
});


//force : drop table and create a new one
//alter : alter the table

connect.db.sync({
    alter : true
}).then(()=> {
    console.log('table email created !! ');
}).catch(error => {
    console.error(error.stack);
});
const Sequelize = require('sequelize');


module.exports = {
    db :  new Sequelize('test'  /*name of database*/, 'ekka' /*user login name*/  , 'ekka'  /*password*/ , 
    {
        host : 'localhost',
        dialect : 'mysql',
    })
};

module.exports.db.authenticate().then(()=> {
    console.log('database worked !!!');
}).catch(error => {
    console.log(error.stack);
});






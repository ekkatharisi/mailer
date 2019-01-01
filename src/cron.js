const nodecron = require('node-cron');
const dateFormat = require('dateformat');
const email = require('./sendEmail');


const getSchedule = (date) => {

    var sechedule = dateFormat(date, "s M H d m");
    return sechedule+' *';
};

module.exports = {
    createTask : (date,emailQuery) => {
        var dateString = getSchedule(date);
        var task = nodecron.schedule(dateString,()=> {
            email.sendEmail(emailQuery);
        });
        return task;
    }
} 
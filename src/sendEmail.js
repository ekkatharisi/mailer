const nodemailer = require('nodemailer');
const config = require('../config/config.json');
var dateFormat = require('dateformat');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.auth_infos.email,
        pass: config.auth_infos.password
    }
});

module.exports = {

    sendEmail : (mailOptions) => {
        //console.log(JSON.stringify(emailQuery));

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                var date = new Date();
                var dateNow = dateFormat(date, "yyyy-mm-dd HH:MM:ss");
                console.log('Email sent: \nfrom :' + mailOptions.from + '\nto :' + mailOptions.to + '\nat :' + dateNow);
            }
        });
    }
}
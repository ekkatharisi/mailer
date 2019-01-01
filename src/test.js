const logic = require('./logic');


var emailQueryTest1 = {
    from :  'chaabaoui aymene <ekkachaabaouiaymene@gmail.com>', // from
    to : 'ekkatharisigames@gmail.com',//to
    subject : 'testing nodemailer module from node.js',//subject
    text : 'task1 test test'
}
var emailQueryTest2 = {
    from :  'chaabaoui aymene <ekkachaabaouiaymene@gmail.com>', // from
    to : 'ekkatharisigames@gmail.com',//to
    subject : 'testing nodemailer module from node.js',//subject
    text : 'task2 test test'
}

var date1 = new Date();
date1.setSeconds(date1.getSeconds() + 5);
var date2 = new Date();
date2.setSeconds(date2.getSeconds() + 7);

var task1 = logic.programTask(emailQueryTest1,date1);
var task2 = logic.programTask(emailQueryTest2,date2);

var index1 = logic.addTask(task1);
var index2 = logic.addTask(task2);

//logic.startTask(index1);
//logic.startTask(index2);

//logic.startAllTask();

//logic.startAllTask();
//logic.purgeTasks();

console.log(logic.getListOfTask());
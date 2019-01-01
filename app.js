const express = require('express');
const bodyParser = require('body-parser');
const logic = require('./src/logic');
const config = require('./config/config.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 8080;

app.get(config.api_prefix+'/init/:nbrTask',(request , response) => {

    var nbrTask = request.params.nbrTask;

    for(var i = 0 ; i<nbrTask ; i++)
    {
        var emailQueryTest = {
            from :  'chaabaoui aymene <ekkachaabaouiaymene@gmail.com>', // from
            to : 'ekkatharisigames@gmail.com',//to
            subject : 'testing nodemailer module from node.js',//subject
            text : 'test test test : '+i
        };
        var date = new Date();
        date.setMinutes(date.getMinutes()+1)
        date.setSeconds(date.getSeconds() +i*4); 
        logic.addTask(emailQueryTest,date);
    }
    return response.status(200).send(true);
});

app.get(config.api_prefix+'/addTask',(request , response) => {
    var scheduleDate = request.body.scheduleDate;
    var emailQuery = request.body.email.emailQuery;
    if(scheduleDate != undefined && emailQuery != undefined){
        var task = logic.programTask(emailQuery , scheduleDate);
        var index = logic.addTask(task);
        return response.status(200).send({
            indexOfAddedTask : index
        });
    }
    else{
        var error = [];
        if(scheduleDate == undefined)
        {
            error.push({
                code : 404,
                message : 'date not found in request !'
            });
        }
        if(emailQuery == undefined)
        {
            error.push({
                code : 404,
                message : 'email not found in request !'
            });
        }
        return response.status(404).send(error);
    }
});
//validé
app.get(config.api_prefix + '/getTasks', (request, response) => {
    var tasksTemp = [];
    var tasks = logic.getListOfTask();
    tasks.forEach(task => {
        tasksTemp.push({
            id: task.id,
            date: task.date
        });
    });
    return response.status(200).send(tasksTemp);
});
//validé
app.get(config.api_prefix + '/getTask/:id' , (request,response) => {
    var id = request.params.id;
    if(id != undefined && id >= 1){
        var task = logic.findTaskById(id);
        return response.status(200).send({
            id : task.id,
            date : task.date
        });
    }
    else
    {
        return response.status(404).send({
            code : 404,
            message : 'id not found or invalide'
        });
    }
});
//valide
app.delete(config.api_prefix + '/deleteTask/:id' , (request,response) => {
    var result = logic.deleteTask(request.params.id);
    return response.status((result)?200:404).send({
        taskDeleted : result
    });
});
//validé
app.delete(config.api_prefix + '/purgeTask' , (request , response) => {
    logic.purgeTasks();
    return response.status(200).send({
        tasksPurged : true
    });
});

app.put(config.api_prefix + '/startTask/:id', (request , response)=> {
    var taskStarted  = logic.startTask(request.params.id);
    return response.status((taskStarted)?200:404).send({
        taskStarted : taskStarted
    });
});
app.put(config.api_prefix + '/stopTask/:id', (request , response)=> {
    var taskStoped  = logic.stopTask(request.params.id);
    return response.status((taskStoped)?200:404).send({
        taskStoped : taskStoped
    });
});

app.put(config.api_prefix + '/startAllTasks' , (request , response) => {
    var nbrOfStartedTask = logic.startAllTask();
    return response.status(200).send({
        nbrOfStartedTask : nbrOfStartedTask
    });
});

app.put(config.api_prefix + '/stopAllTasks' , (request , response) => {
    var nbrOfStopedTask = logic.stopAllTask();
    return response.status(200).send({
        nbrOfStopedTask : nbrOfStopedTask
    });
});

app.listen(PORT , () => {
    console.log('server running at port : '+PORT);
});
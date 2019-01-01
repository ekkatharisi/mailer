const cron = require('./cron');
const email = require('./sendEmail');



/*
var now = new Date();
now.setSeconds(now.getSeconds()+5);
var task = cron.createTask(now,emailQueryTest);

task.start();
*/


var tasks = [];
var sequenceur = 1;


module.exports = {
     
    addTask : (emailQuery , date) => {
        var task = cron.createTask(date,emailQuery);
        task.stop();
        tasks.push({
            id : sequenceur,
            task : task,
            date : date
        });
        return sequenceur++;
    },
    deleteTask : (id) => {
        var n = tasks.length;
        var t = tasks.find(task => task.id == id);
        t.task.destroy();
        tasks = tasks.filter(task => task.id != id);
        return (n>tasks.length);
    },
    purgeTasks : () => {
        tasks.forEach(t => {
            t.task.destroy();
        });
        tasks = [];
        sequenceur = 1;
    },
    findTaskById : (id) => {
        var taskSearched = tasks.find(task => task.id == id);
        return ( taskSearched == undefined )?null : taskSearched;
    },
    getListOfTask : () => {
        return tasks;
    },
    startTask : (id) => {
        var taskIndex = tasks.findIndex(task => task.id == id);
        if(taskIndex==-1)
        {
            return false;
        }
        tasks[taskIndex].task.start();
        return true;
    },
    stopTask : (id) => {
        var taskIndex = tasks.findIndex(task => task.id == id);
        if(taskIndex==-1)
        {
            return false;
        }
        tasks[taskIndex].task.stop();
        return true;
    },
    startAllTask : () => {
        var n = 0;
        tasks.forEach(taskContainer => {
            taskContainer.task.start();
            n++;
        });
        return n;
    },
    stopAllTask : () => {
        var n = 0;
        tasks.forEach(taskContainer => {
            taskContainer.task.stop();
            n++;
        });
        return n;
    }
}

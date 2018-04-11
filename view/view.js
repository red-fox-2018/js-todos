const Table = require('cli-table')

class View {

    static helpDisplay() {

        console.log('node todo.js');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_content>');
        console.log('node todo.js delete <task_content>');
        console.log('node todo.js complete <task_content>');
        console.log('node todo.js uncomplete <task_content>');
    }

    static listDisplay(listTodo) {

        let table = new Table({
            head: ['ID', 'TASK', 'STATUS','TAG', 'CREATE_AT'],
            colWidths: [4,15,10,6,30]
        })

        for (let i = 0; i < listTodo.length; i++) {
            
            table.push([listTodo[i].id,listTodo[i].task,listTodo[i].status,listTodo[i].tag,listTodo[i].createdAt])
        }
        
        console.log(table.toString())
        
    }

    static displayForAll(value) {

        console.log(value);
    }

    static displayCompleteList(taskList) {

        let table = new Table({
            head: ['ID', 'STATUS', 'TASK'],
            colWidths: [4,9,15]
        })

        for (let i = 0; i < taskList.length; i++) {
            let task = taskList[i]
            if(task.status == 'complete') {

                task.status = 'X'
            } else {

                task.status = ' '
            }
            
            table.push([task.id,task.status,task.task])
        }

        console.log(table.toString());
    }

}

module.exports = View
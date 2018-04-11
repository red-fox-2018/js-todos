const Table = require('cli-table');

class View {
  constructor() {

  }

  static callHelp(){
    console.log('$ node todo.js help');
  }

  static help(){
    console.log('============TODO APP==============');
    console.log('Command:');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js findById <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
  }

  static findAll(todos){
    let table = new Table({
      head: ['Id', 'Status', 'Task', 'Created_At'],
      colWidths: [5, 8, 30, 30]
    })

    for(let i = 0; i < todos.length; i++){
      table.push([todos[i].id, todos[i].status, todos[i].task, todos[i].created_at])
    }
    console.log(table.toString());
  }

  static add(todo){
    console.log(`=> Added "${todo}" to your TODO list...`);
  }

  static findById(todo){
    let table = new Table({
      head: ['Id', 'Status', 'Task', 'Created_At'],
      colWidths: [5, 8, 30, 30]
    })

    table.push([todo.id, todo.status, todo.task, todo.created_at])
    console.log(table.toString());
  }

  static delete(todo){
    console.log(`=> Deleted "${todo}" from your TODO list...`);
  }

}

module.exports = View;

const Controller = require('./controller.js')
let command = process.argv.splice(2)

switch(command[0]) {
  case 'help': Controller.showMenu();
  break;
  case 'todoList': Controller.showList();
  break;
  case 'addToDo':
  Controller.addNewTask(command[1]);
  break;
  case 'findById':
  Controller.findById(command[1]);
  break;
  case 'deleteTask':
  Controller.deleteTask(command[1]);
  break;
  case 'complete':
  Controller.completedTask(command[1]);
  break;
  case 'list:created':
  Controller.sortByCreated(command[1]);
  break;
  case 'list:completed':
  Controller.sortByCompleted(command[1]);
  break;
  case 'list:completed':
  Controller.sortByCompleted(command[1]);
  break;
  case 'tag':
  Controller.tagTask(command[1], command.slice(2));
  break;
  default: console.log('insert command');
}

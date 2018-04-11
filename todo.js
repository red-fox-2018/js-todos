const TodoController = require('./controller');

let command = process.argv.slice(2)

switch (command[0]) {
  case "help":
    TodoController.help()
    break;
  case "list":
    TodoController.index()
    break;
  case "add":

    break;
  case "findById":

    break;
  case "delete":

    break;
  case "complete":

    break;
  case "uncomplete":

    break;
  default: TodoController.help()

}

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
    let task_content = command[1]
    TodoController.create(task_content)
    break;

  case "findById":
    let id = command[1]
    TodoController.findById(id)
    break;

  case "delete":
    TodoController.delete(command[1])
    break;

  case "complete":
    TodoController.updateStatus(command[1], true)
    break;

  case "uncomplete":
    TodoController.updateStatus(command[1], false)
    break;
  default: TodoController.help()

}

const TodoController = require('./controllers/controller');

let command = process.argv.slice(2)

switch (command[0]) {
  case "help":
    TodoController.help()
    break;

  case "list":
    TodoController.index()
    break;

  case "list:created":
    TodoController.sortList(command[1])
    break;

  case "list:completed":
    TodoController.completedList(command[1])
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

  case "tag":
    let idTask = command[1]
    let tags = command.slice(2)
    TodoController.addTags(idTask, tags)
    break;

  case "filter":
    let tagName = command[1]
    TodoController.filterList(tagName)
    break;

  default: TodoController.help()

}

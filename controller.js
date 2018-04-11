const View = require('./view');
const Model = require('./model');

class Controller {
  static list(command, task) {
    let toDo = Model.parser();
    if (command === 'list') {
      View.list(toDo)

    } else if (command === 'findById') {
      let toDo = Model.find(task);
      let task_id = toDo.id;
      let task_name = toDo.task;
      View.list(task_id, task_name);
    } else if (command === 'list:created') {
      let toDo = Model.sorting(task);
      View.list(toDo)
    } else if (command === 'list:completed') {
      let toDo = Model.sortStatus(task);
      View.list(toDo)
    } else if (command === 'filter') {
      let toDo = Model.modify(command, task);
      // console.log(toDo)
      View.filter(toDo)
    } else {
      View.help()
    }
  }
  static modify(command, task) {
    let toDo = Model.parser();
    Model.modify(command, task);
    View.output(command, task)
  }
}

module.exports = Controller
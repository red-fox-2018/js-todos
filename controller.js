const TodoModel = require('./model');
const TodoView = require('./view');

class TodoController {
  static help(){
    TodoView.helpDisplay()
  }

  static index(){
    let findAllTodos = TodoModel.findAll()
    TodoView.findAllDisplay(findAllTodos)
  }
}

module.exports = TodoController;

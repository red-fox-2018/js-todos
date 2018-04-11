const TodoModel = require('./model');
const TodoView = require('./view');

class TodoController {
  static help(){
    TodoView.helpDisplay()
  }

  static index(){
    
  }
}

module.exports = TodoController;

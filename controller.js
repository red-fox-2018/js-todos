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

  static create(task_content){
    let createTodo = TodoModel.create(task_content)
    TodoView.createMessage(createTodo)
  }

  static findById(idTask){
    let detailTask = TodoModel.findById(idTask)
    TodoView.detailDisplay(detailTask)
  }

  static delete(idTask){
    let deleteTask = TodoModel.delete(idTask)
    TodoView.deleteMessage(deleteTask)
  }

  static updateStatus(idTask, newStatus){
    let statusTask = TodoModel.updateStatus(idTask, newStatus)
    TodoView.findAllDisplay(statusTask)
  }
}

module.exports = TodoController;

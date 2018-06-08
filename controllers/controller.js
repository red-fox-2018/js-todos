const TodoModel = require('../models/model');
const TodoView = require('../views/view');

class TodoController {
  static help(){
    TodoView.helpDisplay()
  }

  static index(){
    let findAllTodos = TodoModel.findAll()
    TodoView.findAllDisplay(findAllTodos)
  }

  static sortList(sortBy){
    let sortTodo = TodoModel.sortList(sortBy)
    TodoView.findAllDisplay(sortTodo)
  }

  static completedList(sortBy){
    let sortTodo = TodoModel.completedList(sortBy)
    TodoView.findAllDisplay(sortTodo)
  }

  static filterList(tag){
    let filterTask = TodoModel.filterList(tag)
    TodoView.findAllDisplay(filterTask)
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

  static addTags(idTask, tags){
    let tagsTask = TodoModel.addTags(idTask, tags)
    TodoView.addTagMessage(tagsTask)
  }

}

module.exports = TodoController;

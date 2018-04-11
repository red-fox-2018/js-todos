const Model = require('./model.js')
const View = require('./view.js')

class Controller {
  static showMenu() {
    return View.showMenu()
  }

  static showList() {
    var todos =  Model.showList()
    View.showList(todos)
  }

  static addNewTask(newTask) {
    var addTask = {
      id: 0,
      task: newTask,
      status: '',
      created_at: null,
      updated_at: null
    }
    var added = Model.addNewTask(addTask)
    View.addNewTask(added)
  }

  static findById(taskId) {
    var findTask = Model.findById(taskId)
    View.findById(findTask)
  }

  static deleteTask(taskId) {
    var deleted = Model.deleteTask(taskId)
    View.deleteTask(deleted)
  }

  static completedTask(taskId) {
    var completed = Model.completedTask(taskId)
    View.completedTask(completed)
  }

  static sortByCreated(sorted) {
    var sortedList = Model.sortByCreated(sorted)
    View.sortByCreated(sortedList)
  }

  static sortByCompleted(sorted) {
    var completedList = Model.sortByCompleted(sorted)
    View.sortByCompleted(completedList)
  }

  static tagTask(taskId, tags) {
    var tagged = Model.tagTask(taskId, tags)
    View.tagTask(tagged)
  }

}
 module.exports = Controller

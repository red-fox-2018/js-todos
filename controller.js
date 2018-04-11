const View = require('./view')
const Model = require('./model')

class Controller {

  static displayHelp(){
    View.menampilkanHelp()
  }

  static getlist(){
    let todos = Model.getTodos()
    View.menampilkanList(todos)
  }

  static addlist(taskName){
    let flagBerhasil = Model.writeList(taskName)
    View.menampilkanHasilAdd(flagBerhasil)
  }

  static getTaskById(id) {
    let taskResult = Model.findById(id)
    View.menampilkanHasilFind(taskResult)
  }

  static deleteTaskById(taskId) {
    let deleteResult = Model.deleteTodo(taskId)
    View.menampilkanHasilDelete(deleteResult)
  }

  static statusTaskComplate(taskIdComplate) {
    let checked = Model.checkStatusTask(taskIdComplate)
    View.menampilkanList(checked)
  }

  static statusTaskUncomplate(taskIdUncomplate) {
    let unChecked = Model.unCheckStatusTask(taskIdUncomplate)
    View.menampilkanList(unChecked)
  }
}

module.exports = Controller

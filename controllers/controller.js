const View = require('../views/view.js')
const Model = require('../models/model.js')
class Controller{
  static help(){
    View.showHelp()
  }
  static list(){
    let todosList = Model.findAll()
    View.showList(todosList)
  }
  static add(task){
    Model.create(task)
    View.success(task)
    this.list()

  }
  static findByIdTodos(id){
    let todoId = Model.findById(id)
    View.showList(todoId)
  }
  static deleteIdTOdos(id){
    let taskToDelet = Model.destroy(id)
    View.destroyed(taskToDelet)
    this.list()
  }
  static completeTOdos(id){
    Model.updateCom(id)
    this.list()
  }
  static uncompleteTOdos(id){
    Model.updateUncom(id)
    this.list()
  }
  static sortCreated(sort){
    let todoSorted = Model.sortCreated(sort)
    View.showList(todoSorted)
  }
  static sortCompleted(sort){
    let todoSorted = Model.sortCompleted(sort)
    View.showList(todoSorted)
  }
  static deletAll(){
    Model.deletAll()
    View.destroy()
  }
  static tag(content){
    Model.tag(content)
    this.list()
  }
  static filter(tag){
    let todoFilter = Model.filter(tag)
    View.showList(todoFilter)
  }
}

module.exports = Controller;

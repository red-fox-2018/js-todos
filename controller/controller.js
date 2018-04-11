const Model = require('../model/model.js');
const View = require('../view/view.js');

class Controller {

  static callHelp(){
    View.callHelp()
  }

  static help(){
    View.help()
  }

  static findAll(){
    let todos = Model.findAll()
    View.findAll(todos)
  }

  static add(todo){
    let add = Model.add(todo)

    if(add){
      View.add(add)
    }
  }

  static findById(id){
    let todo = Model.findById(id)
    View.findById(todo)
  }

  static delete(id){
    let todo = Model.delete(id)
    View.delete(todo)
  }

  static complete(id){
    let todo = Model.complete(id)
    Controller.findAll()
  }

  static uncomplete(id){
    let todo = Model.uncomplete(id)
    Controller.findAll()
  }
}


module.exports = Controller;

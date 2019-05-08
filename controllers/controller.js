/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const Model = require('../models/model');
const View = require('../views/view');
let model = new Model();

class Controllers {

  static help(){
    View.help();
  }

  static list(){
    let todoList = model.readList();
    View.list(todoList);
  }

  static listCreated(sort){
    let todoList = model.createdSort(sort);
    View.list(todoList);
  }

  static listCompleted(sort){
    let todoList = model.completedSort(sort);
    View.listCompleted(todoList);
  }

  static add(task){
    let add = model.addFile(task);
    View.add(add);
  }

  static findById(id){
    let idTask = model.findTask(id);
    View.find(idTask);
  }

  static delete(id){
    let idTask = model.deleteTask(id);
    View.delete(idTask);
  }

  static deleteAll(){
    let deleteAll = model.deleteAll();
    View.destroy(deleteAll);
  }

  static complete(id){
    let idTask = model.completeTask(id);
    View.complete(idTask);
  }

  static uncomplete(id){
    let idTask = model.uncompleteTask(id);
    View.uncomplete(idTask);
  }

  static tag(id, tag){
    let conten = model.addTag(id, tag);
    View.tag(conten);
  }

  static filterTag(id, tag){
    let conten = model.findByTag(id, tag);
    View.filterTag(conten);

  }

  static printErrCommand(){
    View.printErrCommand();
  }
}

module.exports = Controllers;

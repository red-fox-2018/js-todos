/*jshint esversion:6*/
const View = require('./view');
const Model = require('./model');

class Controller{
  static help(){
    View.helpView();
  }

  static list(){
    var listing = Model.todoFile();
    View.listTodo(listing);
  }

  static add(name){
    Model.add(name);
    View.addView(name);
  }

  static findById(nomor_id){
    let needs = Model.findID(nomor_id);
    View.findIDView(needs);
  }

  static delete(nomor_id){
    let needs = Model.delete(nomor_id);
    View.deleteView(needs,nomor_id);
  }

  static done(nomor_id){
    let needs = Model.done(nomor_id);
    View.completed(needs,nomor_id);
  }

  static undone(nomor_id){
    let needs = Model.undone(nomor_id);
    View.uncompleted(needs,nomor_id);
  }
}




module.exports = Controller;

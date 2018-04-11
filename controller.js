const View = require('./view');
const Model = require('./model');

class Controller {
  constructor() {

  }

  static fromHelpNode() {
    View.showHelpNode()
  }

  static getListFromJson() {
    let listObj = Model.getListFromJson();
    View.showListFromJson(listObj)
  }

  static addListToJson(newList) {
    let addedList = Model.addListToJson(newList)
    View.showAddedList(addedList);
  }

  static findByID(id) {
    let taskId = Model.findByID(id);
    View.showByID(taskId);
  }

  static deleteByID(id) {
    let delId = Model.deleteByID(id);
    View.showDeletedID(delId);
  }
}


module.exports = Controller

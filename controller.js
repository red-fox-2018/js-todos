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

  static completeByID(id) {
    let completeId = Model.completeByID(id);
    View.showCompletedID(completeId)
  }

  static uncompleteByID(id) {
    let uncomplId = Model.uncompleteByID(id);
    View.showUncompleteByID(uncomplId);
  }

  static sortingList(sortType) {
    let sorted = Model.sortingList(sortType);
    View.showListFromJson(sorted)
  }
}


module.exports = Controller

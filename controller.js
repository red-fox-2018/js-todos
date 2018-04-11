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
    Model.addListToJson(newList)
  }

  static findByID(id) {
    let taskId = Model.findByID(id);
    View.showByID(taskId);
  }
}


module.exports = Controller

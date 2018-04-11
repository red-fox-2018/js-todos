
const View = require('./View');
const Model = require('./Model');

class Controller {
  static helpController() {
    View.helpView();
  }
  static listController() {
    // get data from model
    let listResult = Model.getListModel();
    // show data from model to view formatter
    View.listView(listResult);
  }
}

module.exports = Controller;
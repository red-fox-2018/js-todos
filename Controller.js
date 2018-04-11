
const View = require('./View');
const Model = require('./Model');

class Controller {
  /**
   * helpController().
   * call helpView()
   */
  static helpController() {
    View.helpView();
  }
  /**
   * listController().
   * get data from getListModel and show data to listView()
   */
  static listController() {
    let listResult = Model.getListModel();
    View.listView(listResult);
  }
  /**
   * 
   * @param {String} newList - new list will add to List
   */
  static addListController(textList) {
    let addList = Model.addListModel(textList);
    if (addList) {
      View.successAddListView(textList);
    }
  }

  static findByIdController(id) {
    id = Number(id.toString())
    let listResult = Model.findByIdModel(id);
    View.listView(listResult);
  }

  static deleteByIdController(id) {
    id = Number(id.toString());
    let resultDeleted = Model.deleteByIdModel(id);
    if (Object.keys(resultDeleted).length > 0) {
      View.successDeletedListView(resultDeleted.task);
    }
  }
}

module.exports = Controller;
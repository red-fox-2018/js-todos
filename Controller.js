
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
   * - new list will add to List
   * @param {String} newList
   */
  static addListController(textList) {
    let addList = Model.addListModel(textList);
    if (addList) {
      View.successAddListView(textList);
    }
  }
  /**
   * find data by id
   * @param {Number} id
   */
  static findByIdController(id) {
    id = Number(id.toString())
    let listResult = Model.findByIdModel(id);
    View.listView(listResult);
  }
  /**
   * delete list by id
   * @param {Number} id
   */
  static deleteByIdController(id) {
    id = Number(id.toString());
    let resultDeleted = Model.deleteByIdModel(id);
    if (Object.keys(resultDeleted).length > 0) {
      View.successDeletedListView(resultDeleted.task);
    }
  }
  /**
   * update complete property by id
   * @param {Number} id
   */
  static completeController(id) {
    id = Number(id.toString());
    let listResult = Model.updateCompleteById(id, true);
    View.listView(listResult);
  }
  /**
   * update complete property by id
   * @param {Number} id
   */
  static uncompleteController(id) {
    id = Number(id.toString());
    let listResult = Model.updateCompleteById(id, false);
    View.listView(listResult);
  }
}

module.exports = Controller;
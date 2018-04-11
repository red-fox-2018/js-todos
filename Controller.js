
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
}

module.exports = Controller;
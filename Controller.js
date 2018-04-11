
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
    let listResult = Model.getListModel();

    let newList = {
      id: listResult.length + 1,
      task: textList,
    }

    listResult.push(newList);
    
    let addList = Model.addListModel(listResult);
    if (addList) {
      View.successAddListView(textList);
    }
  }
}

module.exports = Controller;
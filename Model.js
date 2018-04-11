
const fs = require('fs');

class Model {
  /**
   * getListMode().
   * get all data from json file
   */
  static getListModel() {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  }
  static writeListModel(allList) {
    fs.writeFileSync('data.json', JSON.stringify(allList), 'utf8');
  }
  /**
   * @param {String} textList
   * add new list to json file
   */
  static addListModel(textList) {
    let allList = Model.getListModel();
    let newList = {
      id: allList.length + 1,
      task: textList,
    }
    allList.push(newList);
    Model.writeListModel(allList);
    return true;
  }
  static findByIdModel(id) {
    let allList = Model.getListModel();
    for (let al of allList) {
      if (al.id == id) {
        return [al];
      }
    }
    return [{ id: null, task: null}];
  }
  static deleteByIdModel(id) {
    let allList = Model.getListModel();
    let deletedList = {};
    for (let i = 0; i < allList.length; i++) {
      if (allList[i] != undefined && allList[i] != null) {
        if (allList[i].id == id) {
          deletedList = allList[i];
          allList[i] = undefined;
        }
      }
    }
    Model.writeListModel(allList);
    return deletedList;
  }
  static updateCompleteById(id, newStatus) {
    let allList = Model.getListModel();
    let deletedList = {};
    for (let i = 0; i < allList.length; i++) {
      if (allList[i] != undefined && allList[i] != null) {
        if (allList[i].id == id) {
          allList[i].complete = newStatus;
        }
      }
    }
    Model.writeListModel(allList);
    return allList;
  }
}

module.exports = Model;

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
      created_data: new Date().toISOString(),
      completed_data: null,
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
          if (newStatus) {
            allList[i].completed_data = new Date().toISOString();
          } else {
            allList[i].completed_data = null;
          }
          
        }
      }
    }
    Model.writeListModel(allList);
    return allList;
  }
  // @ todo: add task
  static updateTagById(id, tags) {
    let allList = Model.getListModel();
    for (let i = 0; i < allList.length; i++) {
      if (allList[i] != undefined && allList[i] != null) {
        if (allList[i].id == id) {
          allList[i].tags = allList[i].tags.concat(tags);
        }
      }
    }
    Model.writeListModel(allList);
    return allList;
  }
  static getListCompletedAscModel() {
    let allList = Model.getListModel();
    let allListCompleted = allList.filter((value) => value.complete);
    return Model._sortByDateAsc(allListCompleted);
  }
  static getListCompletedDescModel() {
    let allList = Model.getListModel();
    let allListCompleted = allList.filter((value) => value.complete);
    return Model._sortByDateDesc(allListCompleted);
  }
  static _sortByDateAsc(value) {
    return value.sort(function(b, a) {
      return new Date(b.completed_data) - new Date(a.completed_data);
    });
  }
  static _sortByDateDesc(value) {
    return value.sort(function(a, b) {
      return new Date(b.completed_data) - new Date(a.completed_data);
    });
  }
}

module.exports = Model;
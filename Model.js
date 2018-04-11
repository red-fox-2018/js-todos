
const fs = require('fs');

class Model {
  static getListModel() {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  }
  /**
   * 
   * @param {String} textList 
   */
  static addListModel(textList) {
    // get all list
    let allList = JSON.parse(fs.readFileSync('data.json', 'utf8'));

    let newList = {
      id: allList.length + 1,
      task: textList,
    }

    allList.push(newList);
    
    fs.writeFileSync('data.json', JSON.stringify(allList), 'utf8');
    return true;
  }
  static findByIdModel(id) {
    let allList = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    for (let al of allList) {
      if (al.id == id) {
        return [al];
      }
    }
    return [{ id: null, task: null}];
  }
  static deleteByIdModel(id) {
    let allList = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    let deletedList = {};
    for (let i = 0; i < allList.length; i++) {
      if (allList[i] != undefined && allList[i] != null) {
        if (allList[i].id == id) {
          deletedList = allList[i];
          allList[i] = undefined;
        }
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(allList), 'utf8');
    return deletedList;
  }
}

module.exports = Model;
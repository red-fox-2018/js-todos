const fs = require('fs');

class Model {
  constructor() {

  }

  static readJsonFile(){
    let listJson = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(listJson)
  }

  static getListFromJson() {
    return this.readJsonFile();
  }

  static addListToJson(list) {
    let strList = ''
    for (var i = 0; i < list.length; i++) {
      strList += list[i] + ' '
    }
    strList = strList.substr(0, strList.length - 1) //remove excess spacing
    let listObj = this.readJsonFile();
    let lastId = listObj[listObj.length - 1].id
    let newListObj = {task: strList, id: lastId + 1}
    listObj.push(newListObj)
    listObj = JSON.stringify(listObj)
    return fs.writeFileSync('./data.json', listObj);
  }

  static findByID(id) {
    let listObj = this.readJsonFile();
    console.log(listObj);
    console.log(id);
    for (var i = 0; i < listObj.length; i++) {
      if (listObj[i].id == id) {
        return listObj[i];
      }
    }
  }

}

module.exports = Model

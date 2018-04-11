const fs = require('fs');

class Model {
  constructor() {

  }

  static readJsonFile(){
    let listJson = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(listJson)
  }

  static writeJsonFIle(input) {
    return fs.writeFileSync('./data.json', input);
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
    let lastId = 0;
    if (listObj.length !== 0) {
      lastId = listObj[listObj.length - 1].id
    }
    // let date = new Date()
    let newListObj = {
      task: strList,
      id: lastId + 1,
      mark: '[ ]',
      created_at: new Date().toISOString()
    }
    listObj.push(newListObj)
    listObj = JSON.stringify(listObj)
    // return fs.writeFileSync('./data.json', listObj);
    this.writeJsonFIle(listObj)
    return strList;
  }

  static findByID(id) {
    let listObj = this.readJsonFile();
    for (var i = 0; i < listObj.length; i++) {
      if (listObj[i].id == id) {
        return listObj[i];
      }
    }
  }

  static deleteByID(id) {
    let listObj = this.readJsonFile();
    let delId = null;
    for (var i = 0; i < listObj.length; i++) {
      if (listObj[i].id == id) {
        delId = listObj[i];
        listObj.splice(i, 1)
      }
      if (listObj[i] != undefined && listObj[i].id != i + 1) {
        listObj[i].id = i + 1;
      }
    }
    listObj = JSON.stringify(listObj);
    this.writeJsonFIle(listObj)
    return delId;
  }

  static completeByID(id) {
    let listObj = this.readJsonFile();
    let complId = null;
    for (var i = 0; i < listObj.length; i++) {
      if (listObj[i].id == id) {
        listObj[i].mark = '[x]'
        complId = listObj[i];
      }
    }
    listObj = JSON.stringify(listObj);
    this.writeJsonFIle(listObj)
    return complId;
  }

  static uncompleteByID(id) {
    let listObj = this.readJsonFile();
    let uncomplId = null;
    for (var i = 0; i < listObj.length; i++) {
      if (listObj[i].id == id) {
        listObj[i].mark = '[ ]';
        uncomplId = listObj[i]
      }
    }
    listObj = JSON.stringify(listObj);
    this.writeJsonFIle(listObj);
    return uncomplId;
  }

  static sortingList(sortType) {
    let listObj = this.readJsonFile()
    if (sortType === undefined || sortType === 'asc') {
      listObj.sort(function (a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
      })
      return listObj;
    } else {
      listObj.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      })
      // console.log(listObj);
      return listObj;
    }
  }

}

module.exports = Model

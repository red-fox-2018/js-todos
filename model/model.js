const fs = require('fs');
const Constroller = require('../controller/controller');

class Model {
  static readDataList() {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return listData;
  }

  static writeData(dataYangPengenDiinput) {
    var list = require('../data.json');
    var obj = {};
    obj.task = dataYangPengenDiinput
    obj.created = new Date();
    obj.complete = false;
    obj.tags = [];
    list.push(obj);
    fs.writeFile('./data.json', JSON.stringify(list), 'utf8')
  }

  static getDataById(idYangDicari) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    for (var i = 0; i < listData.length; i++) {
      if ((i + 1) == idYangDicari) {
        return listData[i];
      }
    }
  }

  static deleteDataById(idYangPengenDiDelete) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

    for (var i = 0; i < listData.length; i++) {
      listData[i]
    }
    var indexYangPengenDiDelete = 0;
    var taskYangDiapus = '';

    //nyari index yang pengen kita apus
    //soalnya ID yang kita dapet ama indexnya selisih 1
    for (var i = 0; i < listData.length; i++) {
      if ((i + 1) == idYangPengenDiDelete) {
        indexYangPengenDiDelete = i;
      }
    }

    //dapetin element task dari indexYangPengenDiDelete
    taskYangDiapus = listData[indexYangPengenDiDelete].task;

    //ngapusing 1 element di indexYangPengenDiDelete
    listData.splice(indexYangPengenDiDelete, 1);

    //timpa list data task kita dengan yang baru
    fs.writeFile('./data.json', JSON.stringify(listData), 'utf8')

    return taskYangDiapus
  }

  static completingUncompletingTask(perintah, index) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

    if (perintah == 'complete') {
      for (var i = 0; i < listData.length; i++) {
        if ((i + 1) == index) {
          listData[i].complete = true;
        }
      }
    } else if (perintah == 'uncomplete') {
      for (var i = 0; i < listData.length; i++) {
        if ((i + 1) == index) {
          listData[i].complete = false;
        }
      }
    }

    fs.writeFile('./data.json', JSON.stringify(listData), 'utf8');
  }

  static sortByCreated(ascDesc) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    if (ascDesc == undefined) {
      listData.sort(function (a, b) {
        return new Date(a.created) - new Date(b.created);
      })
      return listData
    } else if (ascDesc == 'asc') {
      listData.sort(function (a, b) {
        return new Date(a.created) - new Date(b.created);
      })
      return listData
    } else if (ascDesc = 'desc') {
      listData.sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
      })
      return listData
    }
  }

  static filterCompleteTask(ascDesc) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    var listCompleteTask = [];

    for (var i = 0; i < listData.length; i++) {
      if (listData[i].complete == true) {
        listCompleteTask.push(listData[i]);
      }
    }

    if (ascDesc == undefined) {
      listCompleteTask.sort(function (a, b) {
        return new Date(a.created) - new Date(b.created);
      })
      return listCompleteTask
    } else if (ascDesc == 'asc') {
      listCompleteTask.sort(function (a, b) {
        return new Date(a.created) - new Date(b.created);
      })
      return listCompleteTask
    } else if (ascDesc = 'desc') {
      listCompleteTask.sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
      })
      return listCompleteTask
    }
  }

  static addTagToTask(index, data) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    var task = '';

    for (var i = 0; i < listData.length; i++) {
      if ((i + 1) == index) {
        listData[i].tags.push(data);
        task = listData[i].task;
      }
    }

    fs.writeFile('./data.json', JSON.stringify(listData), 'utf8');

    return task;
  }

  static filterCommand(keyword) {
    var listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    var listTaskWithSameTag = [];
    var index = [];

    for (var i = 0; i < listData.length; i++) {
      if (listData[i].tags.includes(keyword)) {
        listTaskWithSameTag.push(listData[i]);
        index.push(i + 1)
      }
    }
    var arrHasil = [];
    arrHasil.push(listTaskWithSameTag);
    arrHasil.push(index);

    return arrHasil;
  }
}

module.exports = Model;

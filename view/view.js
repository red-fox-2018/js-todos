const Controller = require('../controller/controller');

class View {
  static help() {
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js findById <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
    console.log('node todo.js list:created asc|desc');
    console.log('node todo.js list:completed asc|desc');
    console.log('node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
    console.log('node todo.js filter:<tag_name>');
  }

  static ShowListOfData(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].complete == true) {
        console.log(`${i + 1}. [x] ${data[i].task}`);
      } else {
        console.log(`${i + 1}. [ ] ${data[i].task}`);
      }
    }
  }

  static successSavedDataToList(dataYangDisimpen) {
    console.log(`Added "${dataYangDisimpen}" to your TODO list...`);
  }

  static findTaskById(data, idNya) {
    console.log(idNya + '. ' +data.task);
  }

  static successDeleteData(dataYangBerhasilDiapus) {
    console.log(`Deleted "${dataYangBerhasilDiapus}" from your TODO list...`);
  }

  static successCompletingUncompletingData(perintah) {
    console.log(`Success ${perintah} data`);
  }

  static showAscDesc(data) {
    console.log(data);
  }

  static ShowCompleteTask(data) {
    console.log(data);
  }

  static successAddTask(task, isiTag) {
    console.log(`Tagged task "${task}" with tags: ${isiTag.join(' ')}`);
  }

  static successFilterTag(data) {
    for (var i = 0; i < data[0].length; i++) {
      console.log(`${data[1][i]}. ${data[0][i].task} ${data[0][i].tags.join(' ')}`);
    }
  }
}

module.exports = View

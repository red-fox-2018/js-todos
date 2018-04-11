class View {
  constructor() {

  }

  static showEmptyNode() {
    console.log('node todo.js help');
  }

  static showHelpNode() {
    console.log('node todo.js list');
    console.log('node todo.js add <task content>');
    console.log('node todo.js findByID <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }

  static showListFromJson(list) {
    for (var i = 0; i < list.length; i++) {
      console.log(`${list[i].id} ${list[i].task}`);
    }
  }

  static showByID(listId) {
    console.log(`${listId.id} ${list.task}`);
  }
}


module.exports = View

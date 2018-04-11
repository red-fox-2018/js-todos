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
    if (list.length === 0) {
      console.log(`There is no TODO list`);
    }
    for (var i = 0; i < list.length; i++) {
      console.log(`${list[i].id}${list[i].mark} ${list[i].task}`);
    }
  }

  static showAddedList(id) {
    console.log(`added "${id}" to TODO list`);
  }

  static showByID(listId) {
    console.log(`${listId.id}${list.Id.mark} ${listId.task}`);
  }

  static showDeletedID(id) {
    console.log(`Deleted "${id.task}" from your TODO list`);
  }

  static showCompletedID(id) {
    console.log(`completed "${id.task}" from your TODO list`);
  }

  static showUncompleteByID(id) {
    console.log(`"${id.task}" is not completed`);
  }

}


module.exports = View

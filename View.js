
class View {
  static helpView() {
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js findById <id>`);
    console.log(`$ node todo.js delete <id>`);
    console.log(`$ node todo.js complete <id>`);
    console.log(`$ node todo.js uncomplete <id>`);
    console.log(`$ node todo.js list:created asc|desc`);
    console.log(`$ node todo.js list:completed asc|desc`);
    console.log(`$ node todo.js list:tag <task_id> <tag_name_1> <tag_name_n>`);
    console.log(`$ node todo.js filter:<tar_name>`);
  }
  /**
   * 
   * @param {Arrar} list - Array of object list
   */
  static listView(list) {
    let number = 0;
    for (let l of list) {
      if (l != null && l != undefined) {
        number++;
        console.log(`${number}. [${l.complete ? 'x': ' '}] ${l.task} [${l.tags.length > 0 ? l.tags : '' }]`); 
      }
    }
  }
  static successAddListView(textList) {
    console.log(`Added '${textList}' to your TODO list ....`);
  }
  static successDeletedListView(textList) {
    console.log(`Deleted '${textList}' from yout TODO list ...`);
  }
}

module.exports = View;
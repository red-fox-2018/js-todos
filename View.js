
class View {
  static helpView() {
    console.log(`#################### COMMAND ####################`);
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js findById <id>`);
    console.log(`$ node todo.js delete <id>`);
    console.log(`$ node todo.js complete <id>`);
    console.log(`$ node tood.js uncomplete <id>`);
    console.log(``);
  }
  /**
   * 
   * @param {Arrar} list - Array of object list
   */
  static listView(list) {
    for (let l of list) {
      if (l != null && l != undefined) {
        console.log(`${l.id}. ${l.task}`); 
      }
      // number++;
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
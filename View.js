
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
    console.log(`#################### LIST VIEW ####################`);
    let number = 1;
    for (let l of list) {
      console.log(`${number}. ${l.task}`);
      number++;
    }
  }
}

module.exports = View;
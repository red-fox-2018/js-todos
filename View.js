
class View {
  static viewHelp() {
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
}

module.exports = View;
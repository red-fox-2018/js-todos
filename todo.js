/**
 * @author: Iswanul Umam - Red Fox
 *
 */

/*

available command:
$ node todo.js
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_content>
$ node todo.js findById <id>
$ node todo.js delete <id>
$ node todo.js complete <id>
$ node tood.js uncomplete <id>

*/

console.log(`#################### TODO LIST ####################`);

let command = process.argv.slice(2);

switch(command[0]) {
  case 'help' : {
    console.log('command help');
    break;
  }
  case 'list': {
    console.log('command list');
    break;
  }
  case 'add': {
    console.log('command add');
    break;
  }
  case 'findById': {
    console.log('command find by id');
    break;
  }
  case 'delete': {
    console.log('command delete');

    break;
  }
  case 'complete': {
    console.log('command complete');

    break;
  }
  case 'uncomplete': {
    console.log('command uncomplete');

    break;
  }
  default: {
    console.log('command help');
    break;
  }
} 
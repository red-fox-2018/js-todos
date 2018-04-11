/**
 * @author: Iswanul Umam - Red Fox
 *
 */

const Controller = require('./Controller');

let command = process.argv.slice(2);

switch(command[0]) {
  case 'help' : {
    Controller.helpController();
    break;
  }
  case 'list': {
    Controller.listController();
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
    Controller.helpController();
    break;
  }
} 
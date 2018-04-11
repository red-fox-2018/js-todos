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
    let newList = command.join(' ');
    Controller.addListController(newList);
    break;
  }
  case 'findById': {
    Controller.findByIdController(command[1]);
    break;
  }
  case 'delete': {
    // console.log('command delete');
    Controller.deleteByIdController(command[1]);
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
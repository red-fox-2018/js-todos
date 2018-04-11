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
    Controller.deleteByIdController(command[1]);
    break;
  }
  case 'complete': {
    Controller.completeController(command[1]);
    break;
  }
  case 'uncomplete': {
    Controller.uncompleteController(command[1]);
    break;
  }
  default: {
    Controller.helpController();
    break;
  }
} 
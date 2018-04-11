var command = process.argv

const Controller = require('./controller');


// console.log(argv);
if (command[2] === undefined || command[2] === 'help') {
  Controller.fromHelpNode()
} else if (command[2] === 'list') {
  Controller.getListFromJson()
} else if (command[2] === 'add') {
  let addition = command.slice(3)
  Controller.addListToJson(addition)
} else if (command[2] === 'findByID') {
  Controller.findByID(command[3])
} else if (command[2] === 'delete') {
  Controller.deleteByID(command[3])
} else if (command[2] === 'complete') {
  Controller.completeByID(command[3])
} else if (command[2] === 'uncomplete') {
  Controller.uncompleteByID(command[3])
} else if (command[2] === 'list:create') {
  Controller.sortingList(command[3])
}

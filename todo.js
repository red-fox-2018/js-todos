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
}

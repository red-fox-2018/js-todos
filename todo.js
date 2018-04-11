let input = process.argv.splice(2)
let command = input[0];
let task_content = input.splice(1).join(' ')
let Controller = require('./controller');

if (command === 'help' || command === undefined) {
  Controller.list(command)
} else if (command === 'list') {
  Controller.list(command)
} else if (command === 'add') {
  Controller.modify(command, task_content);
} else if (command === 'findById') {
  Controller.list(command, task_content);
} else if (command === 'delete') {
  Controller.modify(command, task_content);
} else if (command === 'complete') {
  Controller.modify(command, task_content);
} else if (command === 'uncomplete') {
  Controller.modify(command, task_content);
} else if (command === 'list:created') {
  Controller.list(command, task_content)
} else if (command === 'list:completed') {
  Controller.list(command, task_content)
} else if (command === 'tag') {
  Controller.modify(command, task_content)
} else {
  let com = command.split(':')
  if (com[0] === 'filter') {
    Controller.list(com[0], com[1])
  }
}
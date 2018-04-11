const command = process.argv.slice(2)
const Controller = require('./controller/controller.js');


if(command[0] == null){
  Controller.callHelp()
} else {
  if(command[0] == 'help'){
    Controller.help()
  }
  if(command[0] == 'list'){
    Controller.findAll()
  }
  if(command[0] == 'add'){
    Controller.add(command.slice(1, command.length))
  }
  if(command[0] == 'findById'){
    Controller.findById(command[1])
  }
  if(command[0] == 'delete'){
    Controller.delete(command[1])
  }
  if(command[0] == 'complete'){
    Controller.complete(command[1])
  }
  if(command[0] == 'uncomplete'){
    Controller.uncomplete(command[1])
  }
}

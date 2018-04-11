"use strict"

const Controller = require('./controller');
const command = process.argv.slice(2)
// console.log(command)

let perintah = command[0]

switch (perintah) {
  case undefined:
    Controller.displayHelp()
    break;
  case 'help':
    Controller.displayHelp()
    break;
  case 'list':
    Controller.getlist()
    break;
  case 'add':
    let taskName = command[1].toString('')
    // console.log(taskName)
    Controller.addlist(taskName)
  break;
  case 'findById':
    let taskIdFind = command[1]
    // console.log(taskId)
    Controller.getTaskById(taskIdFind)
  break;
  case 'delete':
    let taskIdDelete = command[1]
    // console.log(taskId)
    Controller.deleteTaskById(taskIdDelete)
  break;
  case 'complete':
    let taskIdComplate = command[1]
    // console.log(taskId)
    Controller.statusTaskComplate(taskIdComplate)
  break;
  case 'uncomplete':
    let taskIdUncomplate = command[1]
    // console.log(taskId)
    Controller.statusTaskUncomplate(taskIdUncomplate)
  break;


  default:

}

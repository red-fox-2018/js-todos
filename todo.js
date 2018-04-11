
var command = process.argv;
console.log(command[3]);
const Controller = require('./controller.js');

if(command[2]===undefined){

}else if(command[2].substr(0,6) == "filter"){
  var filterCommand = command[2].split(":")
  command[2] = "filter";
}

switch (command[2]) {

  case "help": Controller.helpCommand(command[2]);break;
  case undefined: Controller.helpCommand(command[2]);break;
  case "list": Controller.listCommand();break;
  case "add": if(command[3] != undefined){
    let activity = '';
    for(let i=3;i<command.length;i++){
      activity = activity + command[i] + ' ';
    }
    Controller.addCommand(activity.substr(0,activity.length-1));
     Controller.listCommand();
  };break;
  case "findById": Controller.findCommand(command[3]);break;
  case "delete": Controller.deleteCommand(command[3]);break;
  case "complete": Controller.completeCommand(command[3]);break;
  case "uncomplete": Controller.uncompleteCommand(command[3]);break;
  case "list:created": Controller.sortCreated(command[3]);break;
  case "list:completed": Controller.sortCompleted(command[3]);break;
  case "tag": if(command[4] != undefined){
    let tagNames = [];
    for(let i=4;i<command.length;i++){
      tagNames.push(command[i]);
    }
    Controller.addTagCommand(command[3],tagNames);
  };;break;
  case "completedSort": Controller.sortCompleted(command[2],command[3]);break;
  case "filter": Controller.filterCommand(command[3]);break;

  default:break
}

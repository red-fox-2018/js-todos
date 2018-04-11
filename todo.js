/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const Controller = require('./controllers/controller');

let command = process.argv.slice(2);
let cmd;
if (/\w:\w/g.test(command[0])) {
  cmd = command[0].split(':');
} else {
  cmd = command;
}

switch (cmd[0]) {
  case 'help':
    Controller.help();
    break;
  case 'list':
    if (cmd[1] == 'created') {
      Controller.listCreated(command[1]);
    } else if (cmd[1] == 'completed') {
      Controller.listCompleted(command[1]);
    } else if (!cmd[1]) {
      Controller.list();
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'add':
    if (command[1]) {
      Controller.add(command.slice(1).join(' '));
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'findById':
    if (command[1]) {
      Controller.find(command[1]);
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'delete':
    if (cmd[1] == 'all') {
      Controller.deleteAll(command[1]);
    } else if (!cmd[1]) {
      Controller.delete(command[1]);
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'complete':
    if (command[1]) {
      Controller.complete(command[1]);
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'uncomplete':
    if (command[1]) {
      Controller.uncomplete(command[1]);
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'tag':
    if (command[1]) {
      Controller.tag(command[1], command.slice(2));
    } else {
      Controller.printErrCommand();
    }
    break;
  case 'filter':
    if (cmd[1]) {
      Controller.filterTag(cmd[1], command[1]);
    } else {
      Controller.printErrCommand();
    }
    break;
  default:
    Controller.help();
    break;
}

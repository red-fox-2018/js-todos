const Controller = require('./controller')
const cmd = process.argv

switch (cmd[2]) {
    case undefined:
        Controller.help()
        break;

    case 'help':
        Controller.help()
        break;   

    case 'list':
        Controller.list()
        break;

    case 'add':
        Controller.addList(cmd[3])
        break;

    case 'findById':
        Controller.findById(cmd[3])
        break;

    case 'delete':
        Controller.deleteList(cmd[3])
        break;

    case 'complete':
        Controller.taskList(cmd[2], cmd[3])
        break;

    case 'uncomplete':
        Controller.taskList(cmd[2], cmd[3])
        break;

    case 'list:create':
        Controller.sortList(cmd[2], cmd[3])
        break;
    // default:
    //     break;
}
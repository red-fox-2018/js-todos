const Controller = require('./controllers/controller');
const commands = process.argv.slice(2);

switch (commands[0]) {
    case 'help':
        Controller.help();
        break;
    case 'list':
        Controller.list();
        break;
    case 'add':
        let todo = {task: commands.slice(1).join(' ')}
        Controller.add(todo);
        break;
    case 'findById':
        Controller.findById(parseInt(commands[1]));
        break;
    case 'delete':
        Controller.delete(parseInt(commands[1]));
        break;
    case 'complete':
        Controller.complete(parseInt(commands[1]));
        break;
    case 'uncomplete':
        Controller.uncomplete(parseInt(commands[1]));
        break;
    default:
        Controller.help();
        break;
}
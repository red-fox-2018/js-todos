const command = process.argv.slice(2)
const filterCommand = String(process.argv.slice(2)).split(':')
const content = command.slice(1).join(' ')
const Controller = require('./controllers/controller.js');

switch (command[0]) {
  case 'help': return Controller.help()
  case 'list': return Controller.findAll()
  case 'add': return Controller.addTodo(content)
  case 'findById': return Controller.findById(content)
  case 'delete': return Controller.delete(content)
  case 'complete': return Controller.complete(content)
  case 'uncomplete': return Controller.uncomplete(content)
  case 'list:created': return Controller.listByCreatedAt(content)
  case 'list:completed': return Controller.searchCompleted(content)
  case 'tag': return Controller.addTag(content)

  default: { if (filterCommand[0] == 'filter') {
    const tag_name = filterCommand[1]
    return Controller.filterTag(tag_name)
  } else {
    return Controller.help()
  }}

}

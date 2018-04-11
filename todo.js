const command = process.argv.slice(2)
const content = command.slice(1).join(' ')
const Controller = require('./controllers/controller.js')


switch (command[0]) {
  case undefined : return Controller.help()
  case 'help': return Controller.help()
  case 'list' : return Controller.list()
  case 'add' : return Controller.add(content)
  case 'findById': return Controller.findByIdTodos(content)
  case 'delete': return Controller.deleteIdTOdos(content)
  case 'complete': return Controller.completeTOdos(content)
  case 'uncomplete': return Controller.uncompleteTOdos(content)
  case 'list:created': return Controller.sortCreated(content)
  case 'list:completed': return Controller.sortCompleted(content)
  case 'delete:all': return Controller.deletAll()
  case 'tag': return Controller.tag(content)
  default :
    if(command[0].indexOf(':')!==0){
        command[0] = command[0].split(':')
        if(command[0][0]=='filter' && command[0][1] != '' && command[0].length >1){
            return Controller.filter(command[0][1])
        }else{
          return Controller.help()
        }
    }else{
      return Controller.help()
    }
}

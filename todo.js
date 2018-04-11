
const list = process.argv
let command = list[2]
let id = list[3]
let to_do = list.slice(3).join(' ') 
let tag = ''
if(list[2]!=undefined){
    tag = list[2].substr(7)
}
let Controller = require('./controller.js')
let controller = new Controller()

if(list.length==2){
    controller.notice()
}
switch(command){
    case 'help':
        controller.help()
    break;
    case 'list':
        controller.list()
    break;
    case 'add':
        controller.add(to_do)
    break;
    case 'findById':
        controller.findById(id)
    break;
    case 'delete':
        controller.delete(id)
    break;
    case 'complete':
        controller.complete(id)
    break;
    case 'uncomplete':
        controller.uncomplete(id)
    break;
    case 'list:created':
        if(to_do=='desc'){
            controller.created_desc()
        }
        else{
            controller.created_asc()
        }
    break;
    case 'list:completed':
    if(to_do=='desc'){
        controller.completed_desc()
    }
    else{
        controller.completed_asc()
        
    }
    break;
    case 'tag':
        controller.add_tag(id,to_do)
    break;
    case 'filter:hobby':
        controller.filter(tag)
    break;
}

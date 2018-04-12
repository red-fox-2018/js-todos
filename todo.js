let Controller = require('./controller')

let apply = process.argv.slice(2)
let accesscommand = apply[0]

if(accesscommand === 'add'){
    let value = apply.slice(1)
    var info = value.join(' ')    
}
else{
    var value = apply[1]
    let warp = apply.slice(2)
    var tag = warp.join(' ')
}

if(accesscommand === 'help' || accesscommand === undefined){
    Controller.c_ShowHelp();
}
else if(accesscommand === 'list'){
    Controller.c_TodoList();
}
else if(accesscommand === 'add'){
    Controller.c_newTodoList(info);
}
else if(accesscommand === 'findById'){
    Controller.c_find(value)
}
else if(accesscommand === 'delete'){
    Controller.c_deleteTask(value)
}
else if(accesscommand === 'complete'){
    Controller.c_completedTask(value)
}
else if(accesscommand === 'uncomplete'){
    Controller.c_uncompletedTask(value)
}
else if(accesscommand === 'list:created'){
    Controller.c_ascendingdescendingTask(value)
}
else if(accesscommand === 'list:complete'){
    Controller.c_ascendingdescendingCompleteTask(value)
}
else if(accesscommand === 'tag'){
    Controller.c_putTag(value,tag)
}
else if(accesscommand === 'filter:'){
    Controller.c_filter(value)
}
let Controller = require("./controller")

let argv = process.argv.splice(2)
let command = argv[0]

if(command=="help"){
    Controller.listCommandHelp()
}else if(command=="list"){
    Controller.listCommandList()
}else if(command=="add"){
    Controller.listCommandAdd(argv.splice(1).join(" "))
}else if(command=="findById"){
    Controller.listCommandFind(argv[1])
}else if(command=="delete"){
    Controller.listCommandDelete(argv[1])
}else if(command=="complete" || command=="uncomplete"){
    Controller.listCommandComplete(command,argv[1])
}else if(command=="list:created" || command=="list:completed"){
    Controller.listCommandDate(command,argv[1])
}else if(command=="tag"){
    Controller.listCommandTag(argv[1],argv.splice(2).join(" "))
}else if(command=="filter"){
    Controller.listCommandFilter(argv[1])
}
else{
    console.log("will call help")
}

const controller = require ("./controller.js")
const argv = process.argv
let command = argv[2]
let input =argv[3]


if(command== "help"){
    controller.showHelpCtrl()
}else if(command=="list"){
    controller.showListCtrl()
}else if(command== "add"){
   controller.addTaskCtrl(input)
}else if(command=="find"){
    controller.findByIdCtrl(input)
}else if(command=="delete"){
    controller.deleteByIdCtrl(input)
}else if(command=="complete"){
    controller.completeCtrl(input)
}else if(command=="incomplete"){
    controller.incompleteCtrl(input)
}


// TodoController{
//     static displayHelp(){
//         TodoView.diplayHelp()
//     }

//     static displayList(){
//         let todos = TodoModel.getTodoList()
//         TodoView.displayAll(todos)
//     }
// }

// TodoController.displayHelp()
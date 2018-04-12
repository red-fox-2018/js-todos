const requireView = require ("./view.js")
const requireModel = require("./model.js")

class ToDoController{
    static showHelpCtrl(){
        
        requireView.showHelp()
    }

    static showListCtrl(){
        var parseData=requireModel.getTodos()
        return requireView.displayList(parseData)
        
    }

    static addTaskCtrl(input){
        requireModel.addTask(input)
    }

    static findByIdCtrl(taskno){
        requireModel.findById(taskno)
    }

    static deleteByIdCtrl(taskno){
        requireModel.deleteById(taskno)
    }

    static completeCtrl(taskno){
        requireModel.complete(taskno)
    }

    static incompleteCtrl(taskno){
        requireModel.incomplete(taskno)
    }
    
}


module.exports=ToDoController
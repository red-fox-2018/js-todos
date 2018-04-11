const View = require('./view.js')
const Model = require('./model.js')
const Todo = require('./todo.js')
class Controller{

  static helpCommand(commandArgv){
    View.helpCommand(commandArgv);
  }

  static listCommand(){
    let listData = Model.readData();
    View.listCommand(listData);
  }

  static addCommand(newData){
    Model.addData(newData);
    View.addCommand(newData)
  }

  static findCommand(findValue){
    let findedData = Model.findData(findValue);
    View.findCommand(findedData);
  }

  static deleteCommand(deleteValue){
    let deletedData = Model.deleteData(deleteValue);
    View.deleteCommand(deletedData);
  }

  static completeCommand(idActivity){

    let dataActivity = Model.complete(idActivity);
    if(dataActivity ==null){
      View.completeCommand(dataActivity)
    }else{
      Controller.listCommand();
    }
  }

  static uncompleteCommand(idActivity){

    let dataResult=Model.uncomplete(idActivity);
    if(dataResult==null){
      View.uncompleteCommand(dataResult)
    }else{
      Controller.listCommand();
    }
  }

  static sortCreated(sorttype){
    View.listCommand(Model.createdSort(sorttype));
  }

  static sortCompleted(data,sorttype){
    let complete=Model.completedSort(sorttype)
    View.listCommand(complete);
  }

  static addTagCommand(idList,tagNames){
    let tagData = Model.addTagData(idList,tagNames);
    View.tagCommand(tagData,tagNames)

  }

  static filterCommand(category){
    let filteredData = Model.filterData(category)
    View.filterCommand(filteredData);
  }
}

module.exports = Controller;

const Index = require('../todo');
const Model = require('../model/model');
const View = require('../view/view');

class Controller {
  static inputCommand(input) {
    if (input[0] == undefined || input[0] == 'help') {
      View.help()
    } else if (input[0] == 'list') {
      var dataFromModel = Model.readDataList();
      View.ShowListOfData(dataFromModel);
    } else if (input[0] == 'add') {
      Model.writeData(input[1]);
      View.successSavedDataToList(input[1]);
    } else if (input[0] == 'findById') {
      var taskDariIdYangDicari = Model.getDataById(input[1]);
      View.findTaskById(taskDariIdYangDicari, input[1]);
    } else if (input[0] == 'delete') {
      var dataYangDiapus = Model.deleteDataById(input[1]);
      View.successDeleteData(dataYangDiapus);
    } else if (input[0] == 'complete' || input[0] == 'uncomplete') {
      Model.completingUncompletingTask(input[0], input[1]);
      View.successCompletingUncompletingData(input[0]);
    } else if (input[0] == 'list:created') {
      var hasilAscDesc = Model.sortByCreated(input[1]);
      View.showAscDesc(hasilAscDesc);
    } else if (input[0] == 'list:completed') {
      var completeData = Model.filterCompleteTask(input[1]);
      View.ShowCompleteTask(completeData);
    } else if (input[0] == 'tag') {
      var index = input[1];
      var inputKhususTag = input.slice(2);
      var task = Model.addTagToTask(index, inputKhususTag);
      View.successAddTask(task, inputKhususTag);
    } else if (input[0] == 'filter:hobby') {
      var split = input[0].split(':');
      var keyword = split[1];
      var taskList = Model.filterCommand(keyword);
      View.successFilterTag(taskList);
    }
  }
}

module.exports = Controller;

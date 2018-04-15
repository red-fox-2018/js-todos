let View = require('./view.js')
let Model = require('./model.js')
class Controller{
	static viewToHelp(){ 
		View.viewHelp() //View.viewHelp() nyambung ke fle view.js yang mana akan menampilkan method viewHelp() di view.js
	}
	static getListFromJson(){
		let list = Model.getListFromJson()
		View.viewList(list)
	}
	static addListToJson(task){
		let addedList = Model.addListToJson(task)
		View.showAddedList(addedList)
	}
	static findById(id){
		let taskId = Model.findById(id)
		View.showById(taskId)
	}
	static deleteById(id){
		let taskId = Model.deleteById(id)
		View.showDeletedId(taskId)
	}
	static completeById(id){
		let taskId = Model.completeById(id)
		View.showCompleteTask(taskId)
	}
	static uncompleteById(id){
		let taskId = Model.uncompleteById(id)
		View.showUncompleteTask(taskId)
	}
}
//console.log(Controllerc.findById('awwf'))
module.exports = Controller
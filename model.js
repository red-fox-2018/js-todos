let fs = require('fs')
class Model{
	static readJsonFile(){
		let data = fs.readFileSync('./data.json','utf8')
		let dataParsing = JSON.parse(data)
		return dataParsing
	}
	static writeJsonFile(listTask){
		return fs.writeFileSync('./data.json', listTask)
	}
	static getListFromJson(){
		return this.readJsonFile()
	}
	static addListToJson(task){
		let strList = ''
		for(var i=0;i<task.length;i++){
			strList+=task[i]
		}
		strList = strList
		let listTask = this.readJsonFile()
		let idTask = 0
		if (listTask.length!==0) {
			idTask = listTask[listTask.length-1].id
		}
		let newListTask = {
			task: strList,
			id: idTask+1,
			mark: '[ ]',
			created: new Date().toISOString()
		}
		listTask.push(newListTask)
		listTask = JSON.stringify(listTask)
		this.writeJsonFile(listTask)
		return strList
	}
	static findById(taskId){
		let listId = this.readJsonFile()
		for(var i=0;i<listId.length;i++){
			if (listId[i].id===taskId) {
				return listId[i]
			}
		}
	}
	static deleteById(taskId){
		let listTask = this.readJsonFile()
		let deleteId = null;
		for(var i=0;i<listTask.length;i++){
			if (listTask[i].id===taskId) {
				deleteId = listTask[i]
				listTask.splice(i,1)
			}
			if (listTask[i]!==undefined && listTask[i].id!== i+1) {
				listTask[i].id=i+1
			}
		} 
		listTask = JSON.stringify(listTask)
		this.writeJsonFile(listTask)
		return deleteId
	}
	static completeById(taskId){
		let listTask = this.readJsonFile()
		for(var i=0;i<listTask.length;i++){
			if (listTask[i].id===taskId) {
				listTask[i].mark = ['X']
			}
		}
		listTask = JSON.stringify(listTask)
		this.writeJsonFile(listTask)
		return listTask
	}
	static uncompleteById(taskId){
		let listTask = this.readJsonFile()
		for(var i=0;i<listTask.length;i++){
			if (listTask[i].id===taskId) {
				listTask[i].mark = ['']
			}
		}
		listTask = JSON.stringify(listTask)
		this.writeJsonFile(listTask)
		return listTask
	}
}
//console.log(Model.getListFromJson());
module.exports = Model
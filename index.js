const argv = process.argv
const command = argv.slice(2)
// console.log(command)
const Controller = require('./controller')

if (command[0]===undefined || command[0]==='help') {
	Controller.viewToHelp()
}
else if (command[0]==='list') {
	Controller.getListFromJson()

}
else if (command[0]==='add') {
	let addingTask = command.slice(1)
	Controller.addListToJson(addingTask)
	console.log(addingTask)
}
else if (command[0]==='findById') {
	let id = command[1]
	Controller.findById(Number(id))
}
else if (command[0]==='delete') {
	let id = command[1]
	Controller.deleteById(Number(id))
}
else if (command[0]==='complete') {
	let id = command[1]
	Controller.completeById(Number(id))
}
else if (command[0]==='uncomplete') {
	let id = command[1]
	Controller.uncompleteById(Number(id))
}
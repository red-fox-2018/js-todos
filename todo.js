const Controller=require("./controller.js")
let argv=process.argv;

let command=argv[2];
let task=argv[3];
let id=argv[3];


if(command === 'help') {
	Controller.help()
}else if(command === 'list') {
	Controller.list()
}else if(command==='add' && task !==undefined) {
	Controller.addTask(task)
}else if(command === 'findById' && id !== undefined){
	//console.log(argv);
	Controller.findById(id)
}else if(command === 'delete' && id !== undefined){
	Controller.deleteId(id)
}else if(command === 'complete' && id !== undefined){
	Controller.complete(id)
}else if(command === 'uncomplete' && id !== undefined){
	Controller.uncomplete(id)
}else {
	Controller.help()	
}

//console.log(argv);
//console.log(task);


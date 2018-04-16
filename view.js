class View {

	static showHelp() {
		console.log('$ node todo.js',"\n","$ node todo.js help","\n","$ node todo.js list","\n","$ node todo.js add <task_content>","\n","$ node todo.js findById(task_id)","\n","$ node todo.js delete <task_id>","\n","$ node todo.js complete <task_id>","\n","$ node todo.js uncomplete <task_id>")
	}

	static showList(arr_data) {
		for(let i=0;i<arr_data.length;i++) {
			console.log((i+1)+'. '+arr_data[i]['sign']+arr_data[i]["task"])
		}
	}

	static addTask(task) {
		console.log("Added " +task+" to your TODO List")
	}

	static showById(idAndTask){
		console.log(idAndTask)
	}


	static deleteId(task) {
		console.log(`Deleted ${task} from your TODO List`)
	}
}

module.exports=View
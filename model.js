const Controller = require("./controller.js")
class Model {

	static list() {
		let fs=require('fs');
		let data=fs.readFileSync('data.json');
		return JSON.parse(data);
	}

	static addTask(task) {
		let result=Model.list();
		let new_obj = {
			id: result.length+1 ,
			task: task,
			sign:'[]'
		}
		result.push(new_obj)

		Model.writeData(result)
		
	} 

	static writeData(result){
		var fs=require("fs");
   	 	var data=fs.writeFileSync('data.json',JSON.stringify(result),"utf8");
	}


	static findById(id) {
		let result=Model.list();
		for(let i=0;i<result.length;i++) {
			if(result[i].id == id) {
				return `${result[i].id}: ${result[i].task}`
				//.  `
			}
		}
		return `Nomor ID tidak ditemukan`
	}


	static deleteId(id) {
		let result=Model.list()
		for(let i =0;i<result.length;i++) {
			if(result[i].id == id) {
				var temp=result[i].task;
				result.splice(i,1);
				//return (result.splice(i,1))
				Model.writeData(result);
				
			}
		}
		
		return temp;
	}


}



module.exports= Model
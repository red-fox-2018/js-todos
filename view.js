
class View{
	static viewData(){

	}
	static addlist(tampil){
    console.log(tampil);
    }
    static viewHelp(){
    console.log('$ node todo.js',)
    console.log('$ node todo.js help',)
    console.log('$ node todo.js list',)
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }
  static viewList(list){
    if (list.length===0) {
      console.log('There is no task')
    }
    else{
      console.log('ini list',list)
    }
  }
  static showAddedList(addedList){
    console.log(`added ${addedList} to TODO list`)
  }
  static showById(task_id){
    console.log(`${task_id.id}. ${task_id.task}`)
  }
  static showDeletedId(task_id){
    console.log(`Deleted ${task_id.task} from your TODO List`)
  }
  static showCompleteTask(task_id){
    console.log(this.viewList(task_id))
  }
  static showUncompleteTask(task_id){
    console.log(this.viewList(task_id))
  }

}
//console.log(View.viewHelp().join('\r'));
//console.log(View.viewList())
module.exports = View
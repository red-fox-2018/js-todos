var Table = require('cli-table');
const helpMessage = require('../lib/help.js')
class View{
  static showHelp(){
    console.log(helpMessage)
  }
  static showList(todos){
    var table = new Table({
    head: ['id','status', 'task','created_at','completed_at','tag'],
    colWidths: [5,8, 25,28,28,25]
    });

    todos.forEach(todo=>{
      table.push(Object.values(todo))
    })
    console.log(table.toString())
  }
  static success(task){
    console.log(`Added ${task} to your TODO list...`)
  }
  static destroyed(task){
    console.log(`Deleted ${task} from your TODO list...`)
  }
  static destroy(){
    console.log('all data have been deleted')
  }
}
module.exports = View;

const Table = require('cli-table2');

var table = new Table({
  head: ['id', 'Task', 'status', 'Tag', 'Created At'],
  colWidths: [5, 30, 15, 10, 30]
})

class TodoView {
  static helpDisplay(){
    console.log('$node todo.js                             # will call help');
    console.log('$node todo.js help                        # menampilkan command apa saja yang tersedia');
    console.log('$node todo.js list                        # melihat daftar TODO');
    console.log('$node todo.js add <tas_content>           # menambahkan TODO ke dalam list');
    console.log('$node todo.js findById <id_task>          # melihat detail TODO sesuai `task_id` nya');
    console.log('$node todo.js delete <id_task>            # menghapus TODO sesuai `task_id` nya');
    console.log('$node todo.js complete <id_task>          # menandai status TODO selesai');
    console.log('$node todo.js uncomplete <id_task>        # menandai status TODO belum selesai');
  }

  static findAllDisplay(todos){

    todos.forEach(function(todo){
      var status = todo.status ? "[X]" : "[ ]"
      console.log(`${todo.id}. ${status} ${todo.task}`);
      // table.push([todo.id, todo.task, status, todo.tag, todo.date,])
    })
    // console.log(table.toString());
  }

  static createMessage(task){
    console.log(`Added "${task}" to your TODO list`);
  }

  static detailDisplay(detailTask){
    table.push(Object.values(detailTask))
    console.log(table.toString());
  }

  static deleteMessage(task){
    console.log(`Deleted "${task}" from your TODO list`);
  }

}

module.exports = TodoView;

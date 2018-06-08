const Table = require('cli-table2');
const chalk = require('chalk');

var table = new Table({
  head: ['id', 'Task', 'status', 'Tag', 'Created At'],
  colWidths: [5, 30, 15, 10, 30]
})

class TodoView {
  static helpDisplay(){
    console.log('$node todo.js                                       # will call help');
    console.log('$node todo.js help                                  # menampilkan command apa saja yang tersedia');
    console.log('$node todo.js list                                  # melihat daftar TODO');
    console.log('$node todo.js add <tas_content>                     # menambahkan TODO ke dalam list');
    console.log('$node todo.js findById <id_task>                    # melihat detail TODO sesuai `task_id` nya');
    console.log('$node todo.js delete <id_task>                      # menghapus TODO sesuai `task_id` nya');
    console.log('$node todo.js complete <id_task>                    # menandai status TODO selesai');
    console.log('$node todo.js uncomplete <id_task>                  # menandai status TODO belum selesai');
    console.log('$node todo.js list:created asc|desc                 # mengurutkan daftar TODO berdasar tanggal pembuatan');
    console.log('$node todo.js list:completed asc|desc               # mengurutkan daftar TODO yang berstatus completed');
    console.log('$node todo.js tag <id_task> <tag_1> <tag_2> ...     # menambah tag pada daftar TODO');
    console.log('$node todo.js filter <tag> ...                      # menampilkan daftar TODO berdasar tag');

  }

  static findAllDisplay(todos){

    todos.forEach(function(todo){
      var status = todo.status ? "[X]" : "[ ]"
      let tag = todo.tag.join(", ")
      console.log(`${todo.id}. ${status} ${todo.task} [ ${tag} ]`);
      // table.push([todo.id, todo.task, status, todo.tag, todo.date,])
    })
    // console.log(table.toString());
  }

  static createMessage(task){
    console.log(`Added " ${chalk.cyan(task)} " to your TODO list`);
  }

  static detailDisplay(detailTask){
    table.push(Object.values(detailTask))
    console.log(table.toString());
  }

  static deleteMessage(task){
    console.log(`Deleted "${chalk.yellow(task)}" from your TODO list`);
  }

  static addTagMessage(objTask){
    console.log(`Tagged task "${objTask.task}" with tags : ${objTask.tag}`);
  }

}

module.exports = TodoView;

class TodoView {
  static helpDisplay(){
    console.log('$node todo.js                             # will call help');
    console.log('$node todo.js help                        # menampilkan command apa saja yang tersedia');
    console.log('$node todo.js list                        # melihat daftar TODO');
    console.log('$node todo.js add <tas_content>           # menambahkan TODO ke dalam list');
    console.log('$node todo.js findById <id_task>          # melihat detail TODO sesuai `task_id` nya');
    console.log('$node todo.js delete <id_task>            # menghapus TODO sesuai `task_id` nya');
    console.log('$node todo.js complete                    # menandai status TODO selesai');
    console.log('$node todo.js uncomplete                  # menandai status TODO belum selesai');
  }
}

module.exports = TodoView;

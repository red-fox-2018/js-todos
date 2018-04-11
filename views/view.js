/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

class Views {

  static help() {
    let help = ['===================================================HELP========================================================',
      '$ node todo.js                                           # Will call help',
      '$ node todo.js help                                      # Menampilkan command apa saja yang tersedia',
      '$ node todo.js list                                      # Melihat daftar TODO',
      '$ node todo.js add <task_content>                        # Menambahkan TODO ke dalam list',
      '$ node todo.js findById <task_id>                        # Melihat detail TODO sesuai task_id nya',
      '$ node todo.js delete <task_id>                          # Menghapus TODO sesuai task_id nya',
      '$ node todo.js complete <task_id>                        # Menandai status TODO selesai',
      '$ node todo.js uncomplete <task_id>                      # Menandai status TODO belum selesai',
      '$ node todo.js list:created asc|desc                     # Melihat daftar TODO sesuai tanggal dibuat',
      '$ node todo.js list:completed asc|desc                   # Melihat daftar TODO sesuai daftar yang sudah selesai',
      '$ node todo.js delete:all                                # Menghapus semua daftar TODO',
      '$ node todo.js tag <task_id><tag_name1> ... <tag_name_N> # Menambahkan beberapa tag pada TODO',
      '$ node todo.js filter:<tag_name>                         # Mecari / memfilter TODO yang memiliki tag tertentu'
    ];
    help.forEach((help) => {
      console.log(help);
    });
  }

  static list(input) {
    input.forEach((input) => {
      console.log(input);
    });

  }

  static listCompleted(input) {
    if (input.length == 0) {
      console.log('No task completed!!!');
    } else {
      input.forEach((input) => {
        console.log(input);
      });
    }
  }

  static add(newTask) {
    console.log(`Added "${newTask}" to your TODO list`);
  }

  static find(input) {
    if (input == undefined) {
      console.log('task not found!!!');
    } else {
      console.log(input[0]);
    }
  }

  static delete(task) {
    if (task == undefined) {
      console.log(`Task not found!!!`);
    } else {
      console.log(`Deleted "${task}" from your TODO list`);
    }
  }

  static destroy() {
    console.log('all data have been deleted');
  }

  static complete(complete) {
    if (complete == undefined) {
      console.log(`Task not found!!!`);
    } else {
      console.log(`Good job, your task "${complete.task}" is completed`);
    }
  }

  static uncomplete(uncomplete) {
    if (uncomplete == undefined) {
      console.log(`Task not found!!!`);
    } else {
      console.log(`Task "${uncomplete.task}" is uncomplete`);
    }
  }

  static tag(tag) {
    console.log(`Tagged task "${tag[0].task}" with tags : ${tag[1]}`);
  }

  static filterTag(tag) {
    if (tag.length == 0) {
      console.log('tag not found!!!');
    } else {
      tag.forEach((tag) => {
        console.log(tag);
      });
    }
  }

  static printErrCommand() {
    console.log('Please complete your command!!!');
  }
}

module.exports = Views;

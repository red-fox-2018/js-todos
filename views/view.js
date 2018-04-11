"use strict"
const table = require('../lib/table').table;
const chalk = require('chalk');
const read = require('../lib/read-write-file').read;

class View {
    static showHelp() {
        console.log(`$ node todo.js # will call help\n$ node todo.js help # Menampilkan command apa saja yang tersedia\n$ node todo.js list # Melihat daftar TODO\n$ node todo.js add <task_content> # Menambahkan TODO ke dalam list\n$ node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya\n$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya\n$ node todo.js complete <task_id> # Menandai status TODO selesai\n$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai`);
    }

    static showList() {
        let tableView = table();
        let todos = read();

        todos.forEach(task => {
            tableView.push([task.id, task.task, task.status, task.createdAt, task.updatedAt]);
        });

        console.log(tableView.toString());
    }

    static showMessage(todo) {
        let tableView = table();
        tableView.push([todo[0].id, todo[0].task, todo[0].status, todo[0].createdAt, todo[0].updatedAt]);

        console.log(tableView.toString());
    }
}

module.exports = View;
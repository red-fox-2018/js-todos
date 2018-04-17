"use strict"
const table = require('../lib/table').table;
const chalk = require('chalk');
const read = require('../lib/read-write-file').read;

class View {
    static showHelp() {
        console.log(`$ node todo.js # will call help\n$ node todo.js help # Menampilkan command apa saja yang tersedia\n$ node todo.js list # Melihat daftar TODO\n$ node todo.js add <task_content> # Menambahkan TODO ke dalam list\n$ node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya\n$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya\n$ node todo.js complete <task_id> # Menandai status TODO selesai\n$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai # Menandai status TODO belum selesai\n$ node todo.js list:create asc / desc # Menampilkan TODO sesuai kapan dibuatnya secara ascending atau descending\n$ node todo.js list:complete asc / desc # Menampilkan TODO sesuai kapan diselesaikannya secara ascending atau descending`);
    }

    static showList() {
        let tableView = table();
        let todos = read();

        todos.forEach(task => {
            if (task.status === 'complete') {
                tableView.push([task.id, ` [x]`, task.task, `${task.tag.join(', ')}`, task.createdAt, task.updatedAt]);
            } else {
                tableView.push([task.id, ` [ ]`, task.task, `${task.tag.join(', ')}`, task.createdAt, task.updatedAt]);
            }
        });

        console.log(tableView.toString());
    }

    static showMessage(todos) {
        let tableView = table();

        todos.forEach(task => {
            if (task.status === 'complete') {
                tableView.push([task.id, ` [x]`, task.task, `${task.tag.join(', ')}`, task.createdAt, task.updatedAt]);
            } else {
                tableView.push([task.id, ` [ ]`, task.task, `${task.tag.join(', ')}`, task.createdAt, task.updatedAt]);
            }
        });

        console.log(tableView.toString());
    }
}

module.exports = View;
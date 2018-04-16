/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const fs = require('fs');
const chalk = require('chalk');

class Models {
   constructor() {
      this.todos = this.readFile();
   }

   readFile() {
      return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
   }

   saveFile(data) {
      fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
   }

   getDate() {
      let d = new Date();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let day = d.getDate();
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();

      let getDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds} WIB`;
      return getDate;
   }

   addFile(newTask) {
      let lastId;
      if (this.todos.length == 0) {
         lastId = 1;
      } else {
         lastId = +this.todos[this.todos.length - 1].id + 1;
      }

      let task = {
         id: lastId,
         task: newTask,
         finish: false,
         tagName: [],
         createdAt: this.getDate(),
         completedAt: ''
      };
      this.todos.push(task);
      this.saveFile(this.todos);
      return newTask;
   }

   readList(list = this.todos, tag) {
      let listArr = [];
      let symbol = 'X';
      for (var i = 0; i < list.length; i++) {
         if (list[i].finish == false) {
            list[i].finish = '[   ]';
         } else {
            list[i].finish = '[ ' + chalk.green.bold(`${symbol}`) + ' ]';
         }
         let tag = '';
         if (list[i].tagName.length != 0) {
            tag = `[${list[i].tagName} ]`;
         }
      }
      return list;
   }

   findTask(id) {
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].id == id) {
            return this.readList([this.todos[i]]);
         }
      }
   }

   deleteTask(id) {
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].id == id) {
            let task = this.todos[i].task;
            this.todos.splice(i, 1);
            this.saveFile(this.todos);
            return task;
         }
      }
   }

   deleteAll() {
      let deleted = [];
      this.saveFile(deleted);
   }

   completeTask(id) {
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].id == id) {
            this.todos[i].finish = true;
            this.todos[i].completedAt = this.getDate();
            this.saveFile(this.todos);
            return this.todos[i];
         }
      }
   }

   uncompleteTask(id) {
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].id == id) {
            this.todos[i].finish = false;
            this.todos[i].completedAt = '';
            this.saveFile(this.todos);
            return this.todos[i];
         }
      }
   }

   sortList(list, order = 'asc') {
      if (order == 'asc') {
         list.sort(function(a, b) {
            return a.id > b.id;
         });
      } else if (order == 'desc') {
         list.sort(function(a, b) {
            return a.id < b.id;
         });
      }
      return list;
   }

   createdSort(order = 'asc') {
      return this.readList(this.sortList(this.todos, order));
   }

   completedSort(order = 'asc') {
      let listComp = [];
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].completedAt != '') {
            listComp.push(this.todos[i]);
         }
      }
      return this.readList(this.sortList(listComp, order));
   }

   addTag(id, tag) {
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].id == id) {
            tag.forEach(name => {
               this.todos[i].tagName.push(name);
            });
            this.saveFile(this.todos);
            return [this.todos[i], tag];
         }
      }
   }

   findByTag(tag, order) {
      let byTag = [];
      for (var i = 0; i < this.todos.length; i++) {
         for (var j = 0; j < this.todos[i].tagName.length; j++) {
            if (this.todos[i].tagName[j] == tag) {
               byTag.push(this.todos[i]);
            }
         }
      }
      return this.readList(this.sortList(byTag, order), 'tag');
   }
}

module.exports = Models;

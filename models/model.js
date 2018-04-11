/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const fs = require('fs');

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
      createdAt: new Date(),
      completedAt: null
    };
    this.todos.push(task);
    this.saveFile(this.todos);
    return newTask;
  }

  readList(list = this.todos, tag) {
    let finish;
    let listArr = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].finish == false) {
        finish = '[ ]';
      } else {
        finish = '[X]';
      }
      let tag = '';
      if (list[i].tagName.length != 0) {
        tag = `[${list[i].tagName}]`;
      }
      listArr.push(`${list[i].id}. ${finish} ${list[i].task} ${tag}`);
    }
    return listArr;
  }

  findTask(id) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        return this.readList([this.todos[i]]);
      }
    }
  }

  delTask(id) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        let task = this.todos[i].task;
        this.todos.splice(i, 1);
        this.saveFile(this.todos);
        return task;
      }
    }
  }

  deletedAll(all) {
    let deleted = [];
    this.saveFile(deleted);
  }

  completeTask(id) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        this.todos[i].finish = true;
        this.todos[i].completedAt = new Date();
        this.saveFile(this.todos);
        return this.todos[i];
      }
    }
  }

  uncompleteTask(id) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        this.todos[i].finish = false;
        this.todos[i].completedAt = null;
        this.saveFile(this.todos);
        return this.todos[i];
      }
    }
  }

  sortList(list, order = 'asc') {
    if (order == 'asc') {
      list.sort(function(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    } else if (order == 'desc') {
      list.sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
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
      if (this.todos[i].completedAt != null) {
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

let fs = require('fs');

class Model {
  static parser() {
    let toDo = fs.readFileSync('./data.json', 'utf8');
    let toDoList = JSON.parse(toDo)
    return toDoList
  }
  static sorting(task) {
    let toDoCreate = this.parser();
    if(task == 'desc') {
      for (let i = 0; i < toDoCreate.length; i++) {
        for (let j = i+1; j < toDoCreate.length; j++) {
          if(toDoCreate[i].created < toDoCreate[j].created) {
            let temp = toDoCreate[i];
            toDoCreate[i] = toDoCreate[j];
            toDoCreate[j] = temp
          }
        }
      }
    }
    return toDoCreate
  }
  static sortStatus(task) {
    let toDoCreate = this.parser();
    if(task == 'desc') {
      for (let i = 0; i < toDoCreate.length; i++) {
        for (let j = i+1; j < toDoCreate.length; j++) {
          if(toDoCreate[i].finished < toDoCreate[j].finished) {
            let temp = toDoCreate[i];
            toDoCreate[i] = toDoCreate[j];
            toDoCreate[j] = temp
          }
        }
      }
    } else if(task == 'asc') {
      for (let i = 0; i < toDoCreate.length; i++) {
        for (let j = i+1; j < toDoCreate.length; j++) {
          if(toDoCreate[i].finished > toDoCreate[j].finished) {
            let temp = toDoCreate[i];
            toDoCreate[i] = toDoCreate[j];
            toDoCreate[j] = temp
          }
        }
      }
    }
    return toDoCreate
  }
  static find(id) {
    let toDo = this.parser();
    for (let i of toDo) {
      if (i.id == id) {
        return i
      }
    }
  }
  static modify(command, task) {
    let toDo = this.parser();
    if (command === 'add') {
      let obj = {};
      obj.id = toDo.length + 1;
      obj.task = task;
      obj.complete = '[ ]';
      obj.tag = []
      obj.created = new Date();
      obj.finished = "1990-04-11T10:56:53.154Z";
      toDo.push(obj);
    } else if (command === 'delete') {
      let temp = 0
      for (let i in toDo) {
        if (toDo[i].id == task) {
          toDo[i] = 'deleted'
        }
      }
    } else if (command === 'complete') {
      for (let i in toDo) {
        if (toDo[i].id == task) {
          toDo[i].complete = '[x]';
          toDo[i].finished = new Date();
        }
      }
    } else if (command === 'uncomplete') {
      for (let i in toDo) {
        if (toDo[i].id == task) {
          toDo[i].complete = '[ ]'
          toDo[i].finished = "1990-04-11T10:56:53.154Z";
        }
      }
    } else if (command === 'tag') {
      let tagging = task.split(' ');
      let id = tagging[0];
      let tag = tagging.splice(1);
      for (let i in toDo) {
        if (toDo[i].id == id) {
          toDo[i].tag = tag
        }
      }
    } else if (command === 'filter') {
      let arrResult = []
      for (let i in toDo) {
        if (toDo[i].tag.indexOf(task) != -1) {
          arrResult.push([toDo[i].id, toDo[i].task, toDo[i].tag])
        }
      }
      return arrResult
    }
    let toDoList = JSON.stringify(toDo);
    let save = fs.writeFileSync('./data.json', toDoList)
  }
}

module.exports = Model
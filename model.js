const fs = require('fs');

class TodoModel {
  static findAll() {
    let todos = fs.readFileSync('data.json', 'utf8')
    let todoParse = JSON.parse(todos)
    return todoParse
  }

  static findById(idTask){
    // let todos = TodoModel.findAll()
    // let detailTask = todos.find(detail => detail.id === idTask)
    // return detailTask
    let todos = TodoModel.findAll()
    let detailTodo = todos.filter(function(todo) {
      return todo.id == idTask;
    });
    return detailTodo[0];
  }

  static create(task_content){
    let todos = TodoModel.findAll()
    let id
    if(!todos){
      id = 1
    }else{
      id = Math.max(...todos.map(objTodo => objTodo.id)) + 1
    }

    let newTask ={
      id: id,
      task: task_content,
      status: false,
      tag: [],
      date: new Date()
    }

    todos.push(newTask)
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 2))
    return newTask.task
  }

  static delete(idTask){
    let todos = this.findAll()
    let findTodo = todos.filter(function(todo) {
                    return todo.id == idTask;
                  });

    todos.forEach(function(todo, idx){
      if(todo.id == idTask){
        todos.splice(idx, 1)
      }
    })
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 2))
    return findTodo[0].task
  }

  static updateStatus(idTask, newStatus){
    let todos= this.findAll()
    todos.forEach(function(todo, idx){
      if(todo.id == idTask){
        todo.status = newStatus
      }
    })
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 2))
    return todos
  }
}

module.exports = TodoModel;

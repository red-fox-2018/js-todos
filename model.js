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
      update: new Date(),
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
        todo.update = new Date()
      }
    })
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 2))
    return todos
  }

  static sortList(sortBy){
    let todos = this.findAll()
    if(sortBy === undefined){
      return todos
    }else if(sortBy.toLowerCase() === 'desc'){
      todos.sort(function(a,b){
        return new Date(b.date) - new Date(a.date)
      })
    }

    return todos
  }

  static completedList(sortBy){
    let todos = this.findAll()
    let completedTodos = []
    todos.forEach((todo) =>{
      if(todo.status){
        completedTodos.push(todo)
      }
    })

    if(sortBy === undefined){
      return completedTodos
    }else if(sortBy.toLowerCase() === 'desc'){
      completedTodos.sort(function(a,b){
        return new Date(b.update) - new Date(a.update)
      })
    }

    return completedTodos
  }

  static addTags(idTask, tags){
    let todos= this.findAll()
    todos.forEach(function(todo, idx){
      if(todo.id == idTask){
        tags.forEach((data) => {
          let tagFind = todo.tag.includes(data)
          if(!tagFind){
            todo.tag.push(data)
          }
        })
        todo.update = new Date()
      }
    })
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 2))

    let findTodo = todos.filter(function(todo) {
                    return todo.id == idTask;
                  });
    return findTodo[0]
  }

}

module.exports = TodoModel;

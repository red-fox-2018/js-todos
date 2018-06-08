const fs = require('fs');
const LibraryFile = require('../lib/libFile');
const SortTask = require('../lib/sortTask');

class TodoModel {
  static findAll() {
    let todos = LibraryFile.readFile('./data.json')
    return todos
  }

  static findById(idTask){
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
    LibraryFile.writeFile('./data.json', todos)
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
    LibraryFile.writeFile('./data.json', todos)
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
    LibraryFile.writeFile('./data.json', todos)
    return todos
  }

  static sortList(sortBy){
    let todos = this.findAll()
    if(sortBy === undefined){
      return todos
    }else if(sortBy.toLowerCase() === 'desc'){
      todos = SortTask.dateDesc(todos)
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

  static filterList(inputTag){
    let todos = this.findAll()
    let filterTodos = []
    todos.forEach(todo => {
       let includeTodo = todo.tag.includes(inputTag)
       if(includeTodo){
         filterTodos.push(todo)
       }
    })
    filterTodos = SortTask.dateDesc(filterTodos)
    return filterTodos
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

const fs = require('fs');

class Model {

  static readFile(){
    let todos = fs.readFileSync('./data.json', 'utf-8')
    let arrTodos = JSON.parse(todos)
    return arrTodos
  }

  static writeFile(file, data){
    let str_data = JSON.stringify(data, null, 2)
    fs.writeFileSync(file, str_data, 'utf-8')
  }

  static findAll(){
    return Model.readFile()
  }

  static add(todo){
    let todolist = Model.readFile()

    let obj = {}
    if(todolist.length <= 0){
      obj.id = 1
    } else {
      obj.id = todolist[todolist.length-1].id + 1
    }
    obj.status = '[ ]'
    obj.task = todo.join(' ')
    obj.created_at = new Date()

    todolist.push(obj)
    Model.writeFile('./data.json', todolist)

    return obj.task
  }

  static findById(id){
    let todolist = Model.readFile()

    for(let i = 0; i < todolist.length; i++){
      if(id == todolist[i].id){
        return todolist[i]
      }
    }
  }

  static delete(id){
    let todolist = Model.readFile()

    let newlist = []
    let deleted_todo;
    for(let i = 0; i < todolist.length; i++){
      if(id != todolist[i].id){
        newlist.push(todolist[i])
      } else {
        deleted_todo = todolist[i]
      }
    }
    Model.writeFile('./data.json', newlist)
    return deleted_todo.task;
  }

  static complete(id){
    let todolist = Model.readFile()

    for(let i = 0; i < todolist.length; i++){
      if(id == todolist[i].id){
        todolist[i].status = '[x]'
      }
    }
    Model.writeFile('./data.json', todolist)
  }

  static uncomplete(id){
    let todolist = Model.readFile()

    for(let i = 0; i < todolist.length; i++){
      if(id == todolist[i].id){
        todolist[i].status = '[ ]'
      }
    }
    Model.writeFile('./data.json', todolist)
  }
}

module.exports = Model;

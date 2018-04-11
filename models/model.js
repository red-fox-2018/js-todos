const Lib = require('../lib/library.js')
const Todo = require('./todo.js')

class Model{
  constructor(){
    this.todos = Lib.readFile()
  }

  findAll(){
    return this.todos
  }
  create(task){
    let lastId = 0
    if(this.todos.length === 0){
      lastId = 1
    }else{
      lastId = this.todos[this.todos.length-1].id +1
    }
    let newTodo = new Todo(lastId,task)
    this.todos.push(newTodo)
    this.save()
  }
  findById(id){
    let todoId = this.todos.filter(data=> data.id == id)
    return todoId
  }
  destroy(id){
    let idx = this.todos.indexOf(this.findById(id)[0])
    let taskDelete = this.findById(id)[0].task
    this.todos.splice(idx,1)
    this.save()
    return taskDelete
  }
  updateCom(id){
    let dataCom = this.findById(id)[0]
    dataCom.status = '[x]'
    dataCom.completed_at = (new Date()).toString()
    this.save()
  }
  updateUncom(id){
    let dataUncom = this.findById(id)[0]
    dataUncom.status = '[ ]'
    dataCom.completed_at = 'uncomplete'
    this.save()
  }
  sortCreated(sort){
    var byCreatedAt = this.todos.slice(0);
    byCreatedAt.sort(function(a,b) {
      var x = a.created_at.toLowerCase()
      var y = b.created_at.toLowerCase()
      if(sort === 'asc'){
        return x < y ? -1 : x > y ? 1 : 0
      }else{
        return x > y ? -1 : x < y ? 1 : 0
      }
    })
    return byCreatedAt
  }
  sortCompleted(sort){
    let arrCompleted = this.todos.filter(todo=> todo.status == '[x]')
    arrCompleted.sort(function(a,b) {
      var x = a.completed_at.toLowerCase()
      var y = b.completed_at.toLowerCase()
      if(sort === 'asc'){
        return x < y ? -1 : x > y ? 1 : 0
      }else{
        return x > y ? -1 : x < y ? 1 : 0
      }
    })
    return arrCompleted
  }
  save(){
    Lib.writeFile(this.todos)
  }
  deletAll(){
    let deleted = []
    Lib.writeFile(deleted)
  }
  tag(content){
    content = content.split(' ')
    let id = content[0]
    let tagList = content.slice(1)
    let tagAdd = this.findById(id)
    tagList.forEach(tag=>tagAdd[0].tag.push(tag))
    this.save()
  }
  filter(tag){
      let todosTag = this.todos.filter(todo=>todo.tag.indexOf(tag)!=-1)
      return todosTag
  }
}

module.exports = new Model;

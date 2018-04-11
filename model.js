const fs = require('fs')

class Model {
    constructor(id, taskName, statusComplate){
      this.id = id  
      this.taskName = taskName
      this.createdAt = new Date()
      this.updatedAt = new Date()
      this.statusComplate = statusComplate 
    }

    static getTodos() {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
        return todos
    }

    static writeList(taskName) {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
    
        let id = 0
        if(todos.length > 0){
            id = todos[todos.length-1].id + 1
        }
        else {
            id = 1
        }
        let statusComplate = false        
        let task = new Model(id, taskName, statusComplate)
    
        todos.push(task)
    
        fs.writeFileSync('./data.json',JSON.stringify(todos, null, 2),'utf8')
        
        return taskName
    }

    static findById(id) {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
    
        let task = []
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == id){
                task.push(todos[i])
            }
        }
        return task
        
    }

    static deleteTodo(taskId) {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
    
        var index = 0
        var flag = false
        for(let i=0; i<todos.length; i++){
            if(todos[i].id == taskId){
                index = i
                flag = true
            }
        }

        if(!flag){
            return false
        }
        else {
            
            let taskName = todos[index].taskName
            todos.splice(index,index+1)
            
            fs.writeFileSync('./data.json',JSON.stringify(todos, null, 2),'utf8')
        
            return taskName
        }
    }

    static checkStatusTask(taskIdComplate) {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
    
        let index = 0
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == taskIdComplate) {
                index = i
            }
        }

        todos[index].statusComplate = true
    
        fs.writeFileSync('./data.json',JSON.stringify(todos, null, 2),'utf8')

        return todos
    }

    static unCheckStatusTask(taskIdUncomplate) {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
        let index = 0
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == taskIdUncomplate) {
                index = i
            }
        }

        todos[index].statusComplate = false
    
        fs.writeFileSync('./data.json',JSON.stringify(todos, null, 2),'utf8')

        return todos
    }

}

module.exports = Model
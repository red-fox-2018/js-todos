const Library = require('./library')

class Model {
    constructor(id, taskName, statusComplate){
      this.id = id  
      this.taskName = taskName
      this.createdAt = new Date()
      this.updatedAt = new Date()
      this.statusComplate = statusComplate 
    }

    static getTodos() {
        var todos = Library.readFileJSON()
        return todos
    }

    static writeList(taskName) {
        var todos = Library.readFileJSON()

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
    
        Library.writeFileJSON(todos)
        
        return taskName
    }

    static findById(id) {
        // var todoFile = fs.readFileSync('./data.json','utf8')
        // var todos = JSON.parse(todoFile)
        var todos = Library.readFileJSON()
    
        let task = []
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == id){
                task.push(todos[i])
            }
        }
        return task
        
    }

    static deleteTodo(taskId) {
        var todos = Library.readFileJSON()
    
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
            
            Library.writeFileJSON(todos)
        
            return taskName
        }
    }

    static checkStatusTask(taskIdComplate) {
        var todos = Library.readFileJSON()
    
        let index = 0
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == taskIdComplate) {
                index = i
            }
        }

        todos[index].statusComplate = true
    
        Library.writeFileJSON(todos)

        return todos
    }

    static unCheckStatusTask(taskIdUncomplate) {
        var todos = Library.readFileJSON()

        let index = 0
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id == taskIdUncomplate) {
                index = i
            }
        }

        todos[index].statusComplate = false
    
        Library.writeFileJSON(todos)

        return todos
    }

}

module.exports = Model
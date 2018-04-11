const GetFile = require('../lib/getFile')
const fs = require('fs')
const path = require('path')

class Model {

    static getFile() {
       
        let todos = GetFile.getList()
        return todos
    }

    static addFile(task) {

        let todos = Model.getFile()
        let todo = new Todo(todos.length+1,task,'uncomplete',new Date().toString())
            
        todos.push(todo)
        todos = JSON.stringify(todos, null, 2)

        let path_to_json = path.join(__dirname, '..', 'data.json')
        fs.writeFileSync(path_to_json,todos, 'utf-8')

        return `Added "${todo.task}" to your TODO list...`
        
    }

    static findById(id) {

        let todos = Model.getFile()
        for (let i = 0; i < todos.length; i++) {
            
            if(id == todos[i].id) {

                return `${todos[i].id}. ${todos[i].task}`
            }
        }
    }

    static deleteList(id) {

        let todos = Model.getFile()
        for (let i = 0; i < todos.length; i++) {
            
            if(id == todos[i].id) {
                let taskName = todos[i].task

                todos.splice(todos[i],1)
                todos = JSON.stringify(todos, null, 2)

                let path_to_json = path.join(__dirname,'..', 'data.json')
                fs.writeFileSync(path_to_json, todos , 'utf-8')
                return `${taskName} telah dihapus`
            }
        }
    }

    static completeList(status, id) {

        let todos = Model.getFile()
        for (let i = 0; i < todos.length; i++) {
            
            if(id == todos[i].id) {

                if(status === 'complete'){
                    todos[i].status = 'complete'

                    let newTodos = JSON.stringify(todos, null, 2)
                    let path_to_json = path.join(__dirname,'..', 'data.json')
                    fs.writeFileSync(path_to_json, newTodos , 'utf-8')
                    
                }
            }
        }

        return todos
    }

    static sortList(listCmd, param) {

        let todos = Model.getFile()

        if(listCmd == 'list:created' && param == 'desc') {

            todos.sort(function(a,b){

                return (b.createdAt - a.createdAt)
            })
        }

        return todos
    }
}

class Todo {

    constructor(id, task, status, date) {

        this.id = id
        this.task = task
        this.status = status
        this.tag = []
        this.createdAt = date
    }
}

module.exports = Model
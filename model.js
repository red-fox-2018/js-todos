const fs = require ("fs")
const fileStr = fs.readFileSync ("./data.json")
const todos = JSON.parse(fileStr)

class ToDoModel{
    static getTodos(){
        return todos
    }

    static addTask(input){
        var obj={}
        obj[todos.length+1]=input
        todos.push(obj)
        console.log(todos)
        obj={}
        fs.writeFileSync('./data.json',JSON.stringify(todos),"utf-8")
        return todos
    }

    static findById(taskno){
        for(var i=0; i<todos.length; i++){
             if(Object.keys(todos[i])==taskno){
                 console.log(Object.values(todos[i])[0])
             }
        }
    }

    static deleteById(taskno){

        for(var i=0; i<todos.length; i++){
            if(Object.keys(todos[i])==taskno){
               todos.splice(i,1)
            }
        }
        var array=[]
        var createObj={}

        for(var i=0; i<todos.length; i++){
            createObj[i+1]=Object.values(todos[i])[0]
            array.push(createObj)
            createObj={}
        }

        fs.writeFileSync('./data.json',JSON.stringify(array),"utf-8")
        return array
    }

    static complete(taskno){
        for(var i=0; i<todos.length; i++){
            let obj =todos[i]
            for(i in obj){ 
                if(i == taskno){
                    var changeValues= Object.values(todos[i])[0].replace("[ ]","[X]")
                    obj[i]=changeValues
                } 
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(todos),"utf-8")
        console.log(todos)
    }

    static incomplete(taskno){
        for(var i=0; i<todos.length; i++){
            let obj =todos[i]
            for(i in obj){ 
                if(i == taskno){
                    var changeValues= Object.values(todos[i])[0].replace("[X]","[ ]")
                    obj[i]=changeValues
                } 
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(todos),"utf-8")
        console.log(todos)
    }
    
}

module.exports=ToDoModel


const fs = require('fs')

class View {

    static menampilkanHelp() {
        let fileHelp = fs.readFileSync('./help.txt','utf8').split('\n')
        fileHelp.forEach(function(command){
            console.log(command)
        })
        
    }

    static menampilkanList(todos){
        // console.log(todos)
        let flag = ""
        if(todos.length > 0){
            for(let i=0; i<todos.length; i++){
                if(todos[i].statusComplate == false){
                    flag = "[ ]"
                }
                else {
                    flag = "[X]"
                }
                console.log(`${todos[i].id}. ${flag} ${todos[i].taskName}`)
            }
        }
        else {
            console.log('belum ada todo yang dibuat... ayu men kerja2')
        }

    }

    static menampilkanHasilAdd(flag) {
        if(flag !== ''){
            console.log(`Added "${flag}" to your TODO list...`)
        }
    } 

    static menampilkanHasilFind(taskResult){
        // console.log(taskResult)
        if(taskResult.length > 0){
            console.log(`${taskResult[0].id}. ${taskResult[0].taskName}`)
        }
        else {
            console.log('men, you belum buat todo...')
        }
    }

    static menampilkanHasilDelete(deleteResult) {
        if(deleteResult == false){
            console.log('ngga usah macem-macem, ngga ada id itu')
        }
        else {
            console.log(`Deleted "${deleteResult}" from your TODO list...`)
        }
    }

}

module.exports = View
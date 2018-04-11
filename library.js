const fs = require('fs')

class Library {

    static readFileJSON() {
        var todoFile = fs.readFileSync('./data.json','utf8')
        var todos = JSON.parse(todoFile)
        
        return todos
    }    

    static writeFileJSON(todos) {
        fs.writeFileSync('./data.json',JSON.stringify(todos, null, 2),'utf8')
    }

    
}

module.exports = Library
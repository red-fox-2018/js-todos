const fs = require('fs')

class ReadWriteFile{
  static read() {
    var todos = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
    return todos
  }

  static write(newTask) {
    var todos = ReadWriteFile.read()
    todos.push(newTask)
    fs.writeFileSync('./data.json', JSON.stringify(todos), 'utf-8')
  }

  static writeFile(fileName) {
    fs.writeFileSync('./data.json', JSON.stringify(fileName), 'utf-8')
  }
}

module.exports = ReadWriteFile

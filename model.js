const fs = require('fs');

class TodoModel {
  static findAll() {
    let todos = fs.readFileSync('data.json', 'utf-8')
    let todoParse = JSON.parse(todos)
    return todoParse
  }
}

module.exports = TodoModel;

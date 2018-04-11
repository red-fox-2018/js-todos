const fs = require('fs')
const dataTodo = JSON.parse(fs.readFileSync('./data.json','UTF8').trim())
class Library{
  static readFile(fileName){
      return dataTodo
  }
  static writeFile(todos){
      fs.writeFileSync('./data.json', JSON.stringify(todos,null,2))
  }
}


module.exports = Library;

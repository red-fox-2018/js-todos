const fs = require('fs');
class LibraryFile {
  static readFile(fileName){
    let readFile = fs.readFileSync(fileName, 'utf8')
    let parseFile = JSON.parse(readFile)

    return parseFile
  }

  static writeFile(fileName, FileTodos){
    let readFile = fs.writeFileSync(fileName, JSON.stringify(FileTodos, null, 2))

  }
}

module.exports = LibraryFile;

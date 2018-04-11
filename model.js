const Controller = require('./controller.js')
const ReadWriteFile = require('./readWriteFile.js')

class Model {
  static showList() {
    var readFile = ReadWriteFile.read()
    return readFile
  }

  static addNewTask(newTask) {
    var listToDo = Model.showList()
    if(listToDo.length == 0) {
      var id = 1
    } else {
      var id = listToDo[listToDo.length - 1].id + 1
    }

    newTask.id = id
    newTask.status = 'uncomplete'
    newTask.created_at = new Date()
    newTask.updated_at = new Date()

    var save = ReadWriteFile.write(newTask)
    return newTask
  }

  static findById(taskId) {
    var listToDo = Model.showList()
    for(let i in listToDo) {
      if(taskId == listToDo[i].id) {
        return listToDo[i]
      }
    }
  }

  static deleteTask(taskId) {
    var listToDo = Model.showList()
    var deleted;
    for(let i in listToDo) {
      if(taskId == listToDo[i].id) {
        deleted = listToDo.splice(i, 1)
        ReadWriteFile.writeFile(listToDo)
        return deleted
      }
    }
  }

  static completedTask(taskId) {
    var listToDo = Model.showList()
    for(let i in listToDo) {
      if(taskId == listToDo[i].id) {
        listToDo[i].status = 'complete'
        listToDo[i].updated_at = new Date()
        ReadWriteFile.writeFile(listToDo)
        return listToDo
      }
    }
  }

  static sortByCreated(sorted) {
    var listToDo = Model.showList()
    if(sorted === 'desc') {
      listToDo.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      return listToDo
    } else if(sorted === 'asc') {
      listToDo.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at)
      })
      return listToDo
    } else {
      return listToDo
    }
  }

  static sortByCompleted(sorted) {
    var listToDo = Model.showList()
    var complete = []
    for(let i in listToDo) {
      if(listToDo[i].status === 'complete') {
        complete.push(listToDo[i])
        if(sorted == 'desc') {
          complete.sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at)
          })
        } else {
          complete.sort((a, b) => {
            return new Date(a.updated_at) - new Date(b.updated_at)
          })
        }
      }
    }
    return complete
  }

  static tagTask(taskId, tags) {
    var listToDo = Model.showList()
    for(let i in listToDo) {
      if(taskId == listToDo[i].id) {
        listToDo[i]["tags"] = tags
        ReadWriteFile.writeFile(listToDo)
        return listToDo[i]
      }
    }
  }
}

module.exports = Model

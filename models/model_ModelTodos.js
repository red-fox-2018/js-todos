const fs = require('fs');
const Todo = require('./model_Todo');

class ModelTodos {
  constructor() {
    this.todos = JSON.parse(fs.readFileSync('./data.json', 'utf8', null, 2))
  }

  help(){

    const message = `
    $ node todo.js                          # will call help
    $ node todo.js help                     # Menampilkan command apa saja
    $ node todo.js list                     # Melihat daftar TODO
    $ node todo.js add <task_content>       # Menambahkan TODO ke dalam list
    $ node todo.js findById <task_id>       # Melihat detail TODO sesuai 'task_id' nya
    $ node todo.js delete <task_id>         # Menghapus TODO sesuai 'task_id' nya
    $ node todo.js complete <task_id>       # Menandai status TODO selesai
    $ node todo.js uncomplete <task_id>     # Menandai status TODO belum selesai
    $ node todo.js list:created asc|desc    # Mengurutkan semua TODO dan disortir berdasarkan tanggal pembuatan
                                              TODO [ascending] atau [descending]
    $ node todo.js list:completed asc|desc  # Mengurutkan TODO yang sudah selesai dan disortir berdasarkan
                                              tanggal penyelesaian [ascending] atau [descending]
    $ node todo.js tag <task_id> <tag_name_1> <tag_name_2>...<tag_name_N>
                                            # Menambahkan tag ke dalam TODO
    $ node todo.js filter:<tag_name>        # Mencari TODO mana saja yang memiliki tag yang sama dengan <tag_name>
    `

    return message

  }

  getAll(){

    const allTodos = []

    for (var i = 0; i < this.todos.length; i++) {

      allTodos.push(this.todos[i]);

    }

    return allTodos

  }

  addTodo(content){

    const getId = this.todos.length < 1 ? 1 : this.todos[this.todos.length-1].id + 1
    const newTodo = new Todo(getId, content)

    this.todos.push(newTodo)

    fs.writeFileSync('./data.json', JSON.stringify(this.todos, null, 2))

    return `Added ${newTodo.activity} to your TODO list...`

  }

  findById(id){

    for (var i = 0; i < this.todos.length; i++) {

      if (this.todos[i].id == id) {

        return `${this.todos[i].id}. ${this.todos[i].activity}`

      }

    }

    return `TODO with id ${id} is not define...`

  }

  delete(id){

    for (var i = 0; i < this.todos.length; i++) {

      if (this.todos[i].id == id) {

        const content = this.todos[i].activity

        this.todos.splice(i, 1)

        fs.writeFileSync('./data.json', JSON.stringify(this.todos, null, 2))

        return(`Deleted ${content} from your TODO list...`);

      }

    }

    return `TODO with id ${id} is not define...`

  }

  complete(id){

    if (id == '') {

      return this.showWithStatus()

    } else {

      for (let i = 0; i < this.todos.length; i++) {

        if (this.todos[i].id == id) {

          this.todos[i].status = 'complete'

          this.todos[i].updated_at = new Date().toString()

          fs.writeFileSync('./data.json', JSON.stringify(this.todos, null, 2))

          return this.showWithStatus()

        }

      }

      return `TODO with id ${id} is not define...`

    }


  }

  uncomplete(id){

    if (id == '') {

      return this.showWithStatus()

    } else {

      for (let i = 0; i < this.todos.length; i++) {

        if (this.todos[i].id == id) {

          this.todos[i].status = 'uncomplete'

          fs.writeFileSync('./data.json', JSON.stringify(this.todos, null, 2))

          return this.showWithStatus()

        }

      }

      return `TODO with id ${id} is not define...`

    }

  }

  showWithStatus(){

    const todoWithStatus = []

    for (let i = 0; i < this.todos.length; i++) {

      const checkBox = []

      if (this.todos[i].status == 'complete') {

        checkBox.push('x')

      } else {

        checkBox.push(' ')

      }

      todoWithStatus.push(`${this.todos[i].id}. [${checkBox}] ${this.todos[i].activity}`);

    }

    return todoWithStatus.join('\n')

  }

  listByCreatedAt(sort){

    let sorted;
    let todoSorted = []

    if (sort == 'asc') {

      sorted = this.sortByCreatedAt_Asc(this.todos)

    } else {

      sorted = this.sortByCreatedAt_Desc(this.todos)

    }

    for (var i = 0; i < sorted.length; i++) {

      todoSorted.push(`${sorted[i].id}. ${sorted[i].activity}`);

    }

    return todoSorted.join('\n')

  }

  sortByCreatedAt_Asc(file){

    for (var i = 0; i < file.length; i++) {

      for (var j = i; j < file.length; j++) {

        let temp = 0

        if (file[i].created_at > file[j].created_at) {

          temp = file[i]
          file[i] = file[j]
          file[j] = temp

        }

      }

    }

    return file

  }

  sortByCreatedAt_Desc(file){

    for (var i = 0; i < file.length; i++) {

      for (var j = i; j < file.length; j++) {

        let temp = 0

        if (file[i].created_at < file[j].created_at) {

          temp = file[i]
          file[i] = file[j]
          file[j] = temp

        }

      }

    }

    return file

  }

  sortByUpdatedAt_Asc(file){

    for (var i = 0; i < file.length; i++) {

      for (var j = i; j < file.length; j++) {

        let temp = 0

        if (file[i].updated_at > file[j].updated_at) {

          temp = file[i]
          file[i] = file[j]
          file[j] = temp

        }

      }

    }

    return file

  }

  sortByUpdatedAt_Desc(file){

    for (var i = 0; i < file.length; i++) {

      for (var j = i; j < file.length; j++) {

        let temp = 0

        if (file[i].updated_at < file[j].updated_at) {

          temp = file[i]
          file[i] = file[j]
          file[j] = temp

        }

      }

    }

    return file

  }

  searchCompleted(sort){

    let sorted;
    const fillteredTodos = []

    if (sort == 'asc') {

      sorted = this.sortByUpdatedAt_Asc(this.todos)

    } else {

      sorted = this.sortByUpdatedAt_Desc(this.todos)

    }

    for (var i = 0; i < sorted.length; i++) {

      if (sorted[i].status == 'complete') {

        fillteredTodos.push(`${sorted[i].id}. ${sorted[i].activity}`)

      }

    }

    return fillteredTodos.length != 0 ? fillteredTodos.join('\n') : `TODO's complete is empty`

  }

  addTag(tag){

    const todosId = tag.split(' ')[0]
    const tags = tag.split(' ').slice(1)

    for (var i = 0; i < this.todos.length; i++) {

      if (this.todos[i].id == todosId) {

        for (var j = 0; j < tags.length; j++) {

          this.todos[i].tag.push(tags[j])

        }

        var index = i

      }

    }

    fs.writeFileSync('./data.json', JSON.stringify(this.todos, null, 2))

    const todo_name = this.todos[index].activity

    return `Tagged task "${todo_name}" with tags: ${tags.join(' ')}`

  }

  filterTag(tag_name){

    const sameTag = []
    const result = []

    for (var i = 0; i < this.todos.length; i++) {

      const todo = this.todos[i]

      for (var j = 0; j < todo.tag.length; j++) {

        if (todo.tag[j] == tag_name) {

          sameTag.push(this.todos[i] )

        }

      }

    }

    const sorted = this.sortByCreatedAt_Asc(sameTag)

    for (var i = 0; i < sorted.length; i++) {

      result.push(`${sorted[i].id}. ${sorted[i].activity} [${sorted[i].tag}]`)

    }

    return result.join('\n')

  }

}

module.exports = new ModelTodos;

const View = require('../views/view');
const ModelTodos = require('../models/model_ModelTodos');

class Controller {
  constructor() {

  }

  static help(){

    const done = ModelTodos.help()
    View.show(done);

  }

  static findAll(){

    const todo = ModelTodos.getAll()
    View.showAll(todo)


  }

  static addTodo(content){

    const done = ModelTodos.addTodo(content)
    View.show(done)

  }

  static findById(id){

    const done = ModelTodos.findById(id)
    View.show(done)

  }

  static delete(id){

    const done = ModelTodos.delete(id)
    View.show(done)

  }

  static complete(id){

    const done = ModelTodos.complete(id)
    View.show(done)

  }

  static uncomplete(id){

    const done = ModelTodos.uncomplete(id)
    View.show(done)

  }

  static listByCreatedAt(sort){

    const done = ModelTodos.listByCreatedAt(sort)
    View.show(done)

  }

  static searchCompleted(sort){

    const done = ModelTodos.searchCompleted(sort)
    View.show(done)

  }

  static addTag(tag){

    const done = ModelTodos.addTag(tag)
    View.show(done)

  }

  static filterTag(tag_name){

    const done = ModelTodos.filterTag(tag_name)
    View.show(done)

  }

}

module.exports = Controller;

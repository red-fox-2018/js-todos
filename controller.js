const View = require('./view/view')
const Model = require('./model/model')

class Controller {

    static help () {

        View.helpDisplay()
    }

    static list() {

        let listTodo = Model.getFile()
        View.listDisplay(listTodo)
    }

    static addList(task) {

        let addTodo = Model.addFile(task)
        View.displayForAll(addTodo)
    }

    static findById(id) {

        let findById = Model.findById(id)
        View.displayForAll(findById)
    }

    static deleteList(id) {

        let deleteList = Model.deleteList(id)
        View.displayForAll(deleteList)
    }

    static completeList(status, id) {

        let completeList = Model.completeList(status, id)
        View.displayCompleteList(taskList)
    }

    static sortList(listCmd, param) {

        let sortList = Model.sortList(listCmd, param)
        View.listDisplay(sortList)
    }

}

module.exports = Controller
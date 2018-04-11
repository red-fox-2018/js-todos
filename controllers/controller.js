"use strict"
const View = require('../views/view');
const Model = require('../models/model')

class Controller {
    static help() {
        View.showHelp();
    }

    static list() {
        View.showList();
    }

    static add(objTodo) {
        Model.addTodo(objTodo);
        View.showMessage([objTodo]);
    }

    static findById(todoId) {
        let todo = Model.findTodoById(todoId);
        View.showMessage(todo);
    }

    static delete(todoId) {
        let deletedTodo = Model.deleteById(todoId);
        View.showMessage(deletedTodo);
    }

    static complete(todoId) {
        Model.completeById(todoId);
        View.showList();
    }

    static uncomplete(todoId) {
        Model.uncompleteById(todoId);
        View.showList();
    }

    static createdAtFilter(input) {
        let todos = Model.filterByCreatedAt(input);
        View.showMessage(todos);
    }

    static completeFilter(input) {
        let todos = Model.filterByComplete(input);
        View.showMessage(todos);
    }
}

module.exports = Controller;
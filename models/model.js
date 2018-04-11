"use strict"
const read = require('../lib/read-write-file').read;
const write = require('../lib/read-write-file').write;

class Model {
    constructor() {
        this.todos = read();
    }

    addTodo(objTodo) {
        if (this.todos.length === 0) {
            objTodo.id = 1;
        } else {
            objTodo.id = this.todos[this.todos.length - 1].id + 1;
        }

        objTodo.status = 'uncomplete';
        objTodo.createdAt = new Date().toString();
        objTodo.updatedAt = new Date().toString();

        this.todos.push(objTodo);
        write(this.todos);
    }

    findTodoById(todoId) {
        let result = [];

        this.todos.forEach(task => {
            if (todoId === task.id) {
                result.push(task);
            }
        });

        return result;
    }

    deleteById(todoId) {
        let index;
        let deleted = [];

        this.todos.forEach((task, i) => {
            if (todoId === task.id) {
                index = i;
                deleted.push(task);
            }
        });

        this.todos.splice(index, 1);
        write(this.todos);

        return deleted;
    }

    completeById(todoId) {
        let index;

        this.todos.forEach((task, i) => {
            if (todoId === task.id) {
                index = i;
                task.status = 'complete';
                task.updatedAt = new Date().toString();
            }
        });

        write(this.todos);
    }

    uncompleteById(todoId) {
        let index;

        this.todos.forEach((task, i) => {
            if (todoId === task.id) {
                index = i;
                task.status = 'uncomplete';
                task.updatedAt = new Date().toString();
            }
        });

        write(this.todos);
    }

    filterByCreatedAt(input) {
        let result = this.todos;

        if (input === 'asc') {
            result.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt)
            });
        } else if (input === 'desc') {
            result.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt)
            });
        }

        return result;
    }

    filterByComplete(input) {
        let result = [];

        this.todos.forEach(task => {
            if (task.status === 'complete') {
                result.push(task);
            }
        });

        if (input === 'asc') {
            result.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt)
            });
        } else if (input === 'desc') {
            result.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt)
            });
        }

        return result;
    }
}

let model = new Model();
module.exports = model;
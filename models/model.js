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
        objTodo.createdAt = new Date();
        objTodo.updatedAt = new Date();

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
            }
        });

        write(this.todos);
    }
}

let model = new Model();
module.exports = model;
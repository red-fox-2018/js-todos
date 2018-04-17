"use strict"
const Table = require('cli-table');

class ViewTable {
    static table() {
        let table = new Table({
            head: ['Id', 'Status', 'Task', 'Tag', 'Created At', 'Updated At']
        });

        return table;
    }
}

module.exports = {
    table: ViewTable.table
};
"use strict"
const Table = require('cli-table');

class ViewTable {
    static table() {
        let table = new Table({
            head: ['Id', 'Task', 'Status', 'Created At', 'Updated At'],
            colWidths: [4, 30, 12, 28, 28]
        });

        return table;
    }
}

module.exports = {
    table: ViewTable.table
};
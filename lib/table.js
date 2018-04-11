"use strict"
const Table = require('cli-table');

class ViewTable {
    static table() {
        let table = new Table({
            head: ['Id', 'Status', 'Task', 'Created At', 'Updated At'],
            colWidths: [4, 8, 30, 41, 41]
        });

        return table;
    }
}

module.exports = {
    table: ViewTable.table
};
"use strict"
const fs = require('fs');

class ReadWrite {
    static read() {
        let todos = fs.readFileSync('./data.json', 'utf-8');
        return JSON.parse(todos);
    }

    static write(content) {
        fs.writeFileSync('./data.json', JSON.stringify(content, null, 2), 'utf-8')
    }
}

module.exports = {
    read: ReadWrite.read,
    write: ReadWrite.write
};

const fs = require('fs');

class Model {
  static getListModel() {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  }
}

module.exports = Model;
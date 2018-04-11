
const fs = require('fs');

class Model {
  static getListModel() {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  }
  static addListModel(file) {
    fs.writeFileSync('data.json', JSON.stringify(file), 'utf8');
    return true;
  }
}

module.exports = Model;
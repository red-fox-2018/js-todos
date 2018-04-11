const Controller = require('./controller/controller');
var input = process.argv.slice(2);

Controller.inputCommand(input);

module.exports = input;

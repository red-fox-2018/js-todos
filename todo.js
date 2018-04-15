var Controller = require('./controller.js')
let argv = process.argv
// let tampil = new Controller(argv)
//console.log();
if (argv[2]==='help') {
	Controller.control()
}

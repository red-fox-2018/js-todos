/*jshint esversion:6*/

const fs = require('fs');
const argv = process.argv;
const Controller = require('./controller');

var command = argv[2] || '';

if(command === '' || command === 'help'){
  Controller.help();
}else if(command === 'list'){
  Controller.list();
}else if(command === 'add'){
  Controller.add(argv[3]);
}else if(command === 'findById'){
  Controller.findById(argv[3]);
}else if(command === 'delete'){
  Controller.delete(argv[3]);
}else if(command === 'complete'){
  Controller.done(argv[3]);
}else if(command === 'uncomplete'){
  Controller.undone(argv[3]);
}

var Table = require('cli-table');

class View {
  constructor() {

  }

  static showAll(message){

    var table = new Table({
        head: ['id', 'activity', 'status', 'tag', 'created_at', 'updated_at']
      , colWidths: [5, 25, 15, 20, 15, 15]
    });

    message.forEach(todo => {

      table.push([todo.id, todo.activity, todo.status, todo.tag, todo.created_at, todo.updated_at])
      
    })

    console.log(table.toString());

  }

  static show (message){

    console.log(message);

  }

}

module.exports = View;

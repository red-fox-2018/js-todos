class View {
  static help(command) {
    let arrCommand = ['help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>'];
    for (let i of arrCommand) {
      console.log(`node todo.js ${i}`)
    }
  }
  
  static list(data) {
    for (let i of data) {
      if (i != 'deleted') {
      console.log(`${i.id}. ${i.complete} ${i.task}`)
      }
    }
  }
  static filter(data) {
    for(let i of data) {
      console.log(`${i[0]}. ${i[1]}, ${i[2]}`)
    }
  }
  static output(command, task) {
    if (command === 'add') {
      console.log(`Added "${task}" to your TODO list...`)
    }else if(command === 'delete') {
      console.log(`Deleted "${task}" from your TODO list...`)
    }
  }
}

module.exports = View
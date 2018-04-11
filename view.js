class View {
  static showMenu() {
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content');
    console.log('node todo.js findById <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }

  static showList(todos) {
    for(let i in todos) {
      console.log(`${todos[i].id}. ${todos[i].task}`);
    }
  }

  static addNewTask(newTask) {
    console.log(`added ${newTask.task} to your todo list`);
  }

  static findById(foundTask) {
    if(foundTask === undefined) {
      console.log('task not found');
    } else {
      console.log(`${foundTask.id}. ${foundTask.task}`);
    }
  }

  static deleteTask(deleted) {
    if(deleted === undefined) {
      console.log('task not found');
    } else {
      console.log(`deleted ${deleted[0].task} from your list`);
    }
  }

  static completedTask(todos) {
    for(let i in todos) {
      console.log(`${todos[i].id}. ${todos[i].task}, status: ${todos[i].status}`);
    }
  }

  static sortByCreated(todos) {
    for(let i in todos) {
      console.log(`${todos[i].id}. ${todos[i].task}, status: ${todos[i].status}`);
    }
  }

  static sortByCompleted(todos) {
    for(let i in todos) {
      console.log(`${todos[i].id}. ${todos[i].task}, status: ${todos[i].status}`);
    }
  }

  static tagTask(todos) {
    console.log(`tagged task ${todos.task} with tags: ${todos.tags}`);
  }
}

module.exports = View

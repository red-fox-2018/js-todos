class Todo{
  constructor(id,task){
    this.id = id
    this.status = "[ ]"
    this.task = task
    this.created_at = (new Date()).toString()
    this.completed_at = 'uncomplete'
    this.tag = []
  }
}

module.exports = Todo

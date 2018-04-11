class Todo {
  constructor(id, activity) {
    this.id = id
    this.activity = activity
    this.status = 'uncomplete'
    this.tag = []
    this.created_at = new Date().toString();
    this.updated_at = new Date().toString();
  }
}

module.exports = Todo;

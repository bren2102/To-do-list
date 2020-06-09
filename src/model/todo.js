class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
    this.project = project;
  }

  markAsDone() {
    this.done = !(this.done);
  }
}

export default Todo;
class Project{
  constructor(pName) {
    this.pName = pName;
  }
};

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  }

  markAsDone() {
    this.done = true;
  }
}


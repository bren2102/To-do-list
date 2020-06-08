class Project {

  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
};

export default Project;
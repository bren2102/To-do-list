class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(indTodo) {
    this.todoList.splice(indTodo,1);
    console.log(this.todoList, indTodo);
  }
}

export default Project;
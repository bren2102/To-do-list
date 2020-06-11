import Project from './model/project';
import Todo from './model/todo';

const projects = [];
if (!window.localStorage.getItem('projects')) {
  window.localStorage.setItem('projects', JSON.stringify([]));
} else {
  projects.length = 0;

  const loadedFromStorage = JSON.parse(window.localStorage.getItem('projects'));
  if (loadedFromStorage.length > 0) {
    loadedFromStorage.forEach(element => {
      const newProject = new Project(element.name);
      element.todoList.forEach(todo => {
        const newTodo = new Todo(todo.title, todo.description, todo.dueDate, todo.priority);
        newProject.addTodo(newTodo);
      });
      projects.push(newProject);
    });
  }
}

export default projects;
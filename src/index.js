import Project from './model/project';
import Todo from './model/todo';
import Ui from './ui';
import Projects from './initialize';
import './assets/styles/styles.scss';

Ui.initializeUi();
if (Projects.length === 0) {
  const project1 = new Project('Tutorial');
  const todo1 = new Todo('First step', 'Add a project', '2020-06-10', 'High');
  project1.addTodo(todo1);
  const todo2 = new Todo('Second step', 'Select the project', '2020-06-10', 'High');
  project1.addTodo(todo2);
  const todo3 = new Todo('Third step', 'Add a todo task', '2020-06-10', 'High');
  project1.addTodo(todo3);
  const todo4 = new Todo('Fourth step', 'Mark the task as done', '2020-06-10', 'High');
  project1.addTodo(todo4);
  Projects.push(project1);
  Ui.renderTodos(project1);
} else {
  Ui.renderTodos(Projects[0]);
}
Ui.renderProjects(Projects);

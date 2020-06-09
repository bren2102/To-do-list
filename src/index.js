import Project from "./model/project";
import Todo from "./model/todo";
import Ui from "./ui.js"
import Projects from './initialize';
import './assets/styles/styles.scss';

Ui.initializeUi();

const project = new Project('test');
const todo = new Todo('title', 'description', 'dueDate', 'priority', project);
project.addTodo(todo);
Projects.push(project);
Ui.renderProjects([project]);
Ui.renderTodos(project);

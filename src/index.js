import Project from "./model/project";
import Todo from "./model/todo";
import Ui from "./ui.js"
import './assets/styles/styles.scss';

const project = new Project('test');
const todo = new Todo('title', 'description', 'dueDate', 'priority', project);
project.addTodo(todo);
Ui.renderProjects([project]);
Ui.renderTodos(project);

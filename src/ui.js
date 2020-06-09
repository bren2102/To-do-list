import Projects from './initialize';
import Project from './model/project';
import Todo from './model/todo';

const uiManager = (() => {

  const buttonAddProject = document.querySelector('#addProjectButton');
  const listProjects = document.getElementById('list-projects');
  const todosList = document.getElementById('todos_list');
  const headerProjectName = document.querySelector('#header-project-name');
  const date = document.querySelector('#date');
  const showAddInput = document.createElement('div');

  const initializeUi = () => {
    date.textContent = new Date().toDateString();
  };

  buttonAddProject.addEventListener('click',() => {

    let li_project = document.createElement('li');
    let newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.classList.add('new-project-name');
    newProjectInput.placeholder = 'Add new project title';
    newProjectInput.addEventListener('keypress',(e) => {
      if(e.code === 'Enter')
      {
        let newProject = new Project(newProjectInput.value);
        Projects.push(newProject);
        newProjectInput.remove();
        renderProjects(Projects);
      }
    });
    
    newProjectInput.focus();

    //Add to DOM
    li_project.appendChild(newProjectInput);
    listProjects.appendChild(li_project);
  });

  const renderTodos = (project) => {
    todosList.innerHTML = '';
    headerProjectName.textContent = project.name.charAt(0).toUpperCase() + project.name.slice(1);
    project.todoList.forEach(todoElement => {
      //title, description, dueDate, priority
      let todo = document.createElement('li');
      todo.classList = 'todo';
      todo.innerHTML = `<div><div class="check-done"></div>
                <span>${todoElement.title}</span></div>
                <span>${todoElement.description}</span>
                <span>${todoElement.dueDate}</span>
                <span>${todoElement.priority}</span>`;
      todosList.appendChild(todo);
    });
    addTodolist(project);
  };

  const addTodolist = (currentProject) => {
    const buttonAddtodo = document.createElement('button');
    buttonAddtodo.innerHTML = `+ Add Todo`;
    todosList.appendChild(buttonAddtodo);
    const showAddInput = document.createElement('div');
    buttonAddtodo.addEventListener('click', () => {
      todosList.appendChild(showAddInput);
      buttonAddtodo.remove();
      const inputTodoTitle = document.createElement('input');
      inputTodoTitle.type = 'text';
      showAddInput.appendChild(inputTodoTitle);
      const inputTodoDesc = document.createElement('input');
      inputTodoDesc.type = 'text';
      showAddInput.appendChild(inputTodoDesc);
      const inputTodoDate = document.createElement('input');
      inputTodoDate.type = 'date';
      showAddInput.appendChild(inputTodoDate);
      const inputTodoPriority = document.createElement('select');
      inputTodoPriority.innerHTML = `<option value="high">High</option>
                                <option value = "medium"> Medium </option>
                                <option value = "low"> Low </option>`
      showAddInput.appendChild(inputTodoPriority);
      const buttonSubmitTodo = document.createElement('button');
      buttonSubmitTodo.textContent = 'Add';
      showAddInput.appendChild(buttonSubmitTodo);
      const buttonCancelTodo = document.createElement('button');
      buttonCancelTodo.textContent = 'Cancel';
      showAddInput.appendChild(buttonCancelTodo);

      buttonSubmitTodo.addEventListener('click', () => {
        const newTodo = new Todo(inputTodoTitle.value, inputTodoDesc.value, inputTodoDate.value, inputTodoPriority.value, currentProject);
        currentProject.addTodo(newTodo);
        renderTodos(currentProject);
        showAddInput.remove();
        todosList.appendChild(buttonAddtodo);
      });
      buttonCancelTodo.addEventListener('click', () => {
        showAddInput.remove();
        todosList.appendChild(buttonAddtodo);
      });
    });
  };

  const renderProjects = (projects) => {
    listProjects.innerHTML = '';
    projects.forEach(project => {
      let projList = document.createElement('li');
      projList.addEventListener('click',() => {
        renderTodos(project);
      });
      let bullet = document.createElement('div');
      bullet.classList = 'li_bullet';
      projList.appendChild(bullet);    
      projList.innerHTML = `<div class="li_bullet"></div>${project.name}`;
      listProjects.appendChild(projList);
    });
  };
  return { renderTodos, renderProjects, initializeUi }
})();
export default uiManager;
import Projects from './initialize';
import Project from './model/project';

const uiManager = (() => {

  const buttonAddProject = document.querySelector('#addProjectButton');
  const listProjects = document.getElementById('list-projects');
  const todosList = document.getElementById('todos_list');
  const headerProjectName = document.querySelector('#header-project-name');
  const date = document.querySelector('#date');

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
      todo.innerHTML = `<div class="check-done"></div>${todoElement.title}`;
      todosList.appendChild(todo);
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
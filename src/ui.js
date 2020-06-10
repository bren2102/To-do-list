import Projects from './initialize';
import Project from './model/project';
import Todo from './model/todo';

const uiManager = (() => {
  const buttonAddProject = document.querySelector('#addProjectButton');
  const listProjects = document.getElementById('list-projects');
  const todosList = document.getElementById('todos_list');
  const headerProjectName = document.querySelector('#header-project-name');
  const date = document.querySelector('#date');

  let newProjectOpen = false;

  const initializeUi = () => {
    date.textContent = new Date().toDateString();
  };

  buttonAddProject.addEventListener('click', () => {
    if (newProjectOpen) {
      return;
    }
    newProjectOpen = true;
    const liProject = document.createElement('li');
    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.classList.add('new-project-name');
    newProjectInput.placeholder = 'Add new project title';
    newProjectInput.addEventListener('keypress', (e) => {
      if (e.code === 'Enter') {
        const newProject = new Project(newProjectInput.value);
        Projects.push(newProject);
        newProjectInput.remove();
        /* eslint-disable */
        renderProjects(Projects);
        /* eslint-enable */
        newProjectOpen = false;
      }
    });

    newProjectInput.focus();

    liProject.appendChild(newProjectInput);
    listProjects.appendChild(liProject);
  });

  const renderTodos = (project) => {
    todosList.innerHTML = '';
    headerProjectName.textContent = project.name.charAt(0).toUpperCase() + project.name.slice(1);
    let count = 0;
    project.todoList.forEach(todoElement => {
      const idEl = count;
      const todo = document.createElement('li');
      todo.classList = 'todo';
      const idCheckDone = `check_${count}`;
      const idEdit = `edit_${count}`;
      const idDelete = `delete_${count}`;
      todo.innerHTML = `<div class="todo-header">
                          <div style="display:flex;align-items:center"><div id="${idCheckDone}" class="check-done ${todoElement.done ? 'done' : ''}"></div>
                            <span>${todoElement.title}</span>
                          </div>
                          <div class="right-section">
                            <span class="priority">${todoElement.priority}</span>
                            <span class="due-date">${todoElement.dueDate}</span>
                            <div class="actions" > 
                              <button id="${idEdit}"><span class="iconify" data-inline="false" data-icon="bytesize:edit" style="color: gray; font-size: 18px;"></span></button>
                              <button id="${idDelete}"><span class="iconify" data-inline="false" data-icon="typcn:delete" style="color: gray; font-size: 18px;"></span></button>
                            </div>
                          </div>
                        </div>
                        <span class="description">${todoElement.description}</span>`;
      todosList.appendChild(todo);
      document.getElementById(idCheckDone).addEventListener('click', () => {
        todoElement.markAsDone();
        renderTodos(project);
      });
      document.getElementById(idEdit).addEventListener('click', () => {
        todo.innerHTML = '';
        const showAddInput = document.createElement('div');
        showAddInput.classList.add('new-todo-input');
        const inputTodoTitle = document.createElement('input');
        inputTodoTitle.type = 'text';
        inputTodoTitle.placeholder = 'Add Title';
        inputTodoTitle.value = todoElement.title;
        showAddInput.appendChild(inputTodoTitle);
        const inputTodoDesc = document.createElement('input');
        inputTodoDesc.type = 'text';
        inputTodoDesc.placeholder = 'Add Description';
        inputTodoDesc.value = todoElement.description;
        showAddInput.appendChild(inputTodoDesc);
        const inputTodoDate = document.createElement('input');
        inputTodoDate.type = 'date';
        inputTodoDate.value = todoElement.dueDate;
        showAddInput.appendChild(inputTodoDate);
        const inputTodoPriority = document.createElement('select');
        inputTodoPriority.innerHTML = `<option value="High">High</option>
                                  <option value="Medium"> Medium </option>
                                  <option value="Low"> Low </option>`;
        inputTodoPriority.value = todoElement.priority;
        showAddInput.appendChild(inputTodoPriority);

        const buttonSubmitTodo = document.createElement('button');
        buttonSubmitTodo.textContent = 'Save';
        buttonSubmitTodo.classList.add('button-accent');
        showAddInput.appendChild(buttonSubmitTodo);
        const buttonCancelTodo = document.createElement('button');
        buttonCancelTodo.textContent = 'Cancel';
        buttonCancelTodo.classList.add('cancel-button');
        showAddInput.appendChild(buttonCancelTodo);

        buttonSubmitTodo.addEventListener('click', () => {
          todoElement.title = inputTodoTitle.value;
          todoElement.description = inputTodoDesc.value;
          todoElement.dueDate = inputTodoDate.value;
          todoElement.priority = inputTodoPriority.value;

          renderTodos(project);
          showAddInput.remove();
        });

        buttonCancelTodo.addEventListener('click', () => {
          showAddInput.remove();
          renderTodos(project);
        });

        todo.appendChild(showAddInput);
      });
      document.getElementById(idDelete).addEventListener('click', () => {
        project.removeTodo(idEl);
        renderTodos(project);
      });
      count += 1;
    });
    /* eslint-disable */
    addTodolist(project);
    
    localStorage.setItem('projects', JSON.stringify(Projects));
    /* eslint-enable */
  };

  const addTodolist = (currentProject) => {
    const buttonAddtodo = document.createElement('button');
    buttonAddtodo.id = 'button-add-todo';
    buttonAddtodo.innerHTML = '+ Add Todo';
    todosList.appendChild(buttonAddtodo);
    const showAddInput = document.createElement('div');
    showAddInput.classList.add('new-todo-input');
    buttonAddtodo.addEventListener('click', () => {
      todosList.appendChild(showAddInput);
      buttonAddtodo.remove();
      const inputTodoTitle = document.createElement('input');
      inputTodoTitle.type = 'text';
      inputTodoTitle.placeholder = 'Add Title';
      showAddInput.appendChild(inputTodoTitle);
      const inputTodoDesc = document.createElement('input');
      inputTodoDesc.type = 'text';
      inputTodoDesc.placeholder = 'Add Description';
      showAddInput.appendChild(inputTodoDesc);
      const inputTodoDate = document.createElement('input');
      inputTodoDate.type = 'date';
      showAddInput.appendChild(inputTodoDate);
      const inputTodoPriority = document.createElement('select');
      inputTodoPriority.innerHTML = `<option value="High">High</option>
                                <option value = "Medium"> Medium </option>
                                <option value = "Low"> Low </option>`;
      showAddInput.appendChild(inputTodoPriority);
      const buttonSubmitTodo = document.createElement('button');
      buttonSubmitTodo.textContent = 'Add';
      buttonSubmitTodo.classList.add('button-accent');
      showAddInput.appendChild(buttonSubmitTodo);
      const buttonCancelTodo = document.createElement('button');
      buttonCancelTodo.textContent = 'Cancel';
      buttonCancelTodo.classList.add('cancel-button');
      showAddInput.appendChild(buttonCancelTodo);

      buttonSubmitTodo.addEventListener('click', () => {
        const newTodo = new Todo(inputTodoTitle.value,
          inputTodoDesc.value, inputTodoDate.value,
          inputTodoPriority.value);
        console.log(currentProject);
        currentProject.addTodo(newTodo);
        renderTodos(currentProject);
        showAddInput.remove();
      });
      buttonCancelTodo.addEventListener('click', () => {
        showAddInput.remove();
        renderTodos(currentProject);
      });
    });
  };

  const renderProjects = (projects) => {
    listProjects.innerHTML = '';
    projects.forEach(project => {
      const projList = document.createElement('li');
      projList.addEventListener('click', () => {
        renderTodos(project);
      });
      const bullet = document.createElement('div');
      bullet.classList = 'li_bullet';
      projList.appendChild(bullet);
      projList.innerHTML = `<div class="li_bullet"></div>${project.name}`;
      listProjects.appendChild(projList);
    });
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  return { renderTodos, renderProjects, initializeUi };
})();
export default uiManager;
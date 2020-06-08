const uiManager = (() => {
  const renderTodos = (project) => {
    let todosList = document.getElementById('todos_list');
    project.todoList.forEach(todoElement => {
      //title, description, dueDate, priority
      let todo = document.createElement('li');
      todo.classList = 'todo';
      todo.innerHTML = `<div class="check-done"></div>${todoElement.title}`;
      todosList.appendChild(todo);
    });
  };
  const renderProjects = (projects) => {
    let listProjects = document.getElementById('list-projects');
    projects.forEach(project => {
      let projList = document.createElement('li');
      let bullet = document.createElement('div');
      bullet.classList = 'li_bullet';
      projList.appendChild(bullet);    
      projList.innerHTML = `<div class="li_bullet"></div>${project.name}`;
      listProjects.appendChild(projList);
    });
  };
  return { renderTodos, renderProjects }
})();
export default uiManager;
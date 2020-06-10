let projects = [];
if (!window.localStorage.getItem('projects')) {
  window.localStorage.setItem('projects', JSON.stringify([]));
}

projects = JSON.parse(window.localStorage.getItem('projects'));

export default projects;
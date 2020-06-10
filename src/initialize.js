const projects = [];
if (!window.localStorage.getItem('projects')) {
  window.localStorage.setItem('projects', JSON.stringify([]));
}
projects.length = 0;
projects.push(...JSON.parse(window.localStorage.getItem('projects')));

export default projects;
const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.use((req, res, next) => {
  console.count('Requests');

  return next();
})

function checkProjectExists(req, res, next){
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  if (!project){
    return res.status(400).json({ error: "Project don't exist" });
  }

  return next();
}

function checkIdIsUnique (req, res, next){
  const { id } = req.body;

  const project = projects.find(project => project.id == id);

  if (project){
    return res.status(400).json({ error: "Id is being used" });
  }
  
  return next()
}

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.post('/projects', checkIdIsUnique, (req, res) => {
  const { id, title } = req.body;

  const project = { id, title, tasks: [] };

  projects.push(project);

  return res.json({ message: "Project successfully added" });
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(project => project.id == id);

  projects[projectIndex].title = title;

  return res.json({ message: "Project successfully edited" });
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id == id);
  projects.splice(projectIndex, 1);
  
  return res.json({ message: "Project successfully deleted" });
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(project => project.id == id);

  projects[projectIndex].tasks.push(title);
  
  return res.json({ message: "Task project successfully added" });
})

server.listen(3333, () => {
  console.log("server is running");
})

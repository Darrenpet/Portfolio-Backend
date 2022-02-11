const express = require("express");
const app = express.Router();

const projects = [
  {
    id: 1,
    title: "First Portfolio",
    details: "My first project HTML and CSS",
    img: "FirstPortfolio.jpg",
    github: "https://github.com/Darrenpet/First-Portfolio",
    netlify: "https://1234darren.netlify.app",
  },
  {
    id: 2,
    title: "Temperature Converter",
    details:
      "We had to Temperature Converter (From Degree to Fahrenheit and back)",
    img: "TemperatureConverter.jpg",
    github: "https://github.com/Darrenpet/Temperature-Converter",
    netlify: "https://kind-villani-453fd1.netlify.app",
  },
  {
    id: 3,
    title: "JavaScript Calculator",
    details: "First project that included JavaScript",
    img: "Calculator.jpg",
    github: "https://github.com/Darrenpet/Calculator",
    netlify: "https://affectionate-chandrasekhar-919229.netlify.app",
  },
  {
    id: 4,
    title: "eCommerce Store",
    details: "We had to create an eCommerce Store",
    img: "eCommerceStore.jpg",
    github: "https://github.com/Darrenpet/CRUD-Excercise",
    netlify: "https://awesome-davinci-9bf4c2.netlify.app",
  },
  {
    id: 5,
    title: "Bootstrap Mini Project",
    details: "We had to recreate a website using Bootstrap",
    img: "BootstrapMiniProject.jpg",
    github: "https://github.com/Darrenpet/Bootstrap-Mini-Project",
    netlify: "https://friendly-noyce-2084d5.netlify.app",
  },
  {
    id: 6,
    title: "BMI Calculator",
    details: "We were tasked with making a BMI Calculator",
    img: "BMICalculator.jpg",
    github: "https://github.com/Darrenpet/BMI-Calculator",
    netlify: "https://brave-wozniak-3da144.netlify.app",
  },
];

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}

// GET ALL PROJECTS
app.get("/", (req, res) => {
  res.send(projects);
});

// GET ONE PROJECT
app.get("/:id", (req, res) => {
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );
  if (!project)
    return res
      .status(404)
      .send({ msg: "The project with that given id was not found" });
  res.send(project);
});

// CREATE A PROJECT
app.post("/", (req, res) => {
  const { title, details, img, github, netlify } = req.body;

  if (!title || !details || !img || !github || !netlify)
    return res.status(400).send({ msg: "Not all data sent" });

  const project = {
    id: projects.length + 1,
    title,
    details,
    img,
    github,
    netlify,
  };
  projects.push(project);
  res.send(project);
});

// UPDATE PROJECTS
app.put("/:id", (req, res) => {
  const { title, details, img, github, netlify } = req.body;
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );
  if (!project)
    res
      .status(404)
      .send({ msg: "The project with the given id was not found" });

  if (title) project.title = title;
  if (details) project.details = details;
  if (img) project.img = img;
  if (github) project.github = github;
  if (netlify) project.netlify = netlify;

  res.send(project);
});

// DELETE PROJECTS
app.delete("/:id", (req, res) => {
  project = projects.filter((project) => project.id != parseInt(req.params.id));
  fixArrayID(project);
  res.send({ msg: "Project has been deleted" });
});

module.exports = app;

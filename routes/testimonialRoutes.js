const express = require("express");
const app = express.Router();

const testimonials = [
  {
    id: 1,
    name: "Kagiso Mphayi",
    quote:
      "Darren is a smartworking individual who is always focused. He shows great attention to detail and has good time management skills.",
    img: "Kagiso.jpg",
    relation: "Class 1 colleague",
  },
  {
    id: 2,
    name: "Jordan Dawson",
    quote:
      "Darren Petersen is a hardworking and quick student who picks up on things extremely easily and is very adaptable to most situations. He is also very dedicated to his work and will put extra effort and time where it needs to be put into.",
    img: "Jordan.jpg",
    relation: "Class 1 colleague",
  },
  {
    id: 3,
    name: "Abdul Atheem Mullins",
    quote:
      "Darren is one of the most honest, hardworking, inspiring and dedicated pupil i know. Darren always strives to complete any task to the best of his ability.",
    img: "Mullins.jpeg",
    relation: "Class 1 colleague",
  },
  {
    id: 4,
    name: "Ubaidullah Breda",
    quote:
      "Darren is a person with a wonderful character, he always shares the information that he has and is very easy to work with while motivating me to do better.",
    img: "Ubaidullah.jpg",
    relation: "Class 1 colleague",
  },
  {
    id: 5,
    name: "Hannah Dalwai",
    quote:
      "Darren is a hardworking individual and always ready to help a teammate in need.",
    img: "Hannah.jpg",
    relation: "Class 2 colleague",
  },
  {
    id: 6,
    name: "Godwin Dzvapatsva",
    quote:
      "Darren shows a lot of creativity in coding classes It's a pleasure watching him focus on the work in class. I am cheering Darren on to do well in web development.",
    img: "Godwin.jpeg",
    relation: "Head of Curriculum and Learning",
  },
];

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}

// GET ALL TESTIMONIALS
app.get("/", (req, res) => {
  res.send(testimonials);
});

// GET ONE TESTIMONIAL
app.get("/:id", (req, res) => {
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id === parseInt(req.params.id)
  );
  if (!testimonial)
    return res
      .status(404)
      .send({ msg: "The testimonial with that given id was not found" });
  res.send(testimonial);
});

// CREATE A TESTIMONIAL
app.post("/", (req, res) => {
  const { name, quote, img, relation } = req.body;

  if (!name || !quote || !img || !relation)
    return res.status(400).send({ msg: "Not all data sent" });

  const testimonial = {
    id: testimonials.length + 1,
    name,
    quote,
    img,
    relation,
  };
  testimonials.push(testimonial);
  res.send(testimonial);
});

// UPDATE TESTIMONIALS
app.put("/:id", (req, res) => {
  const { name, quote, img, relation } = req.body;
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id === parseInt(req.params.id)
  );
  if (!testimonial)
    res
      .status(404)
      .send({ msg: "The testimonial with the given id was not found" });

  if (name) resumes.name = name;
  if (quote) resumes.quote = quote;
  if (img) resumes.img = img;
  if (relation) resumes.relation = relation;

  res.send(testimonial);
});

// DELETE TESTIMONIALS
app.delete("/:id", (req, res) => {
  testimonial = testimonials.filter(
    (testimonial) => testimonial.id != parseInt(req.params.id)
  );
  fixArrayID(testimonial);
  res.send({ msg: "Testimonial has been deleted" });
});

module.exports = app;

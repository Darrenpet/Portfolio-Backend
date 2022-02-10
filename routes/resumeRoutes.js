const express = require("express");
const app = express.Router();

const resume = [
  {
    id: 1,
    date: "2021/Present",
    event: "Web development and Coding",
    place: "LifeChoices Academy",
    details:
      "Started a Web development and Coding Course at LifeChoices Academy. I have started learning the following languages: HTML, CSS, JavaScript, MySQL, Vue, Front-End and Back-End development.",
  },
  {
    id: 2,
    date: "2016/2017",
    event: "Higher Certificate in Accounting Science",
    place: "Univercity of South Africa (UNISA)",
    details:
      "Started my Higher Certificate in Accounting Science. Subjects that I finished are: BNU1501, CAS1501, CLA1503, ENN1504, FAC1501, MNB1501, MAC1501 and TAX1501. I had to drop out from the course due to financial reasons. Subjects that are outstanding: AUE1501 and FAC1502.",
  },
  {
    id: 3,
    date: "2014/2020",
    event: "Accountant/Bookkeeper",
    place: "Muizenberg Bowling and Croquet Club",
    details:
      "Started doing volunteer bookkeeping and admin work at Muizenberg Bowling and Croquet Club.",
  },
  {
    id: 4,
    date: "2014/2014",
    event: "Bachelors Pass",
    place: "Muizenberg High School",
    details: "Finished my matric with a Bachelors Pass.",
  },
];

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}

// GET ALL RESUME
app.get("/", (req, res) => {
  res.send(resume);
});

// GET ONE RESUME
app.get("/:id", (req, res) => {
  const resumes = resume.find(
    (resumes) => resumes.id === parseInt(req.params.id)
  );
  if (!resumes)
    res
      .status(404)
      .send({ msg: "The resume with that given id was not found" });
  res.send(resumes);
});

// CREATE A RESUME
app.post("/", (req, res) => {
  const { date, event, place, details } = req.body;

  if (!date || !event || !place || !details)
    return res.status(400).send({ msg: "Not all data sent" });

  const resumes = {
    id: resume.length + 1,
    date,
    event,
    place,
    details,
  };
  resume.push(resumes);
  res.send(resumes);
});

// UPDATE RESUME
app.put("/:id", (req, res) => {
  const { date, event, place, details } = req.body;
  const resumes = resume.find(
    (resumes) => resumes.id === parseInt(req.params.id)
  );
  if (!resumes)
    res
      .status(404)
      .send({ msg: "The resumes with the given id was not found" });

  if (date) resumes.date = date;
  if (event) resumes.event = event;
  if (place) resumes.place = place;
  if (details) resumes.details = details;

  res.send(resumes);
});

// DELETE RESUME
app.delete("/:id", (req, res) => {
  resumes = resume.filter((resumes) => resumes.id != req.params.id);
  fixArrayID(resumes);
  res.send({ msg: "Resume has been deleted" });
});

module.exports = app;

const express = require("express");
const cors = require("cors"); // Middleware communicate between front and back end
const resumeRoutes = require("./routes/resumeRoutes");
const projectRoutes = require("./routes/projectRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "My Portfolio API" });
});

app.use("/resume", resumeRoutes);
app.use("/projects", projectRoutes);
app.use("/testimonials", testimonialRoutes);
app.use("/contact", contactRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log("Press CTRL+C to quit");
});

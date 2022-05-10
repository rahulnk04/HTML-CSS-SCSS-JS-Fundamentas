const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");

var courses = require("./models/course.model");
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(cors());

app.delete("/courses/:id", (req, res) => {
  // console.log("Deleting.." + );
  // Delete logic
  let theCourseId = +req.params.id; // convert to the number
  // functional programming (immutable !)
  courses = courses.filter((course) => course.id != theCourseId);

  res.json({ msg: "success" });
});

app.post("/newcourse", (req, res) => {
  let newCourseToBeAdded = req.body;
  courses = [...courses, newCourseToBeAdded];
  res.json({ msg: "success" });
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});

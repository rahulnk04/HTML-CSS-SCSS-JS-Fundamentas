const express = require("express");
const path = require("path");
const app = express();
var courses = require("./models/course.model");
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.delete("/courses/:id", (req, res) => {
  // console.log("Deleting.." + );
  // Delete logic
  let theCourseId = +req.params.id; // convert to the number
  // functional programming (immutable !)
  courses = courses.filter((course) => course.id != theCourseId);

  res.json({ msg: "success" });
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});
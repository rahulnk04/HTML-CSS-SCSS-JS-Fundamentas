async function FetchCourses() {
  try {
    let response = await fetch("http://localhost:3000/courses");
    let courses = await response.json(); // ok
    //console.log(courses);
    DisplayCourses(courses);
  } catch (error) {
    console.log(error);
  }
}

function DisplayCourses(courses) {
  for (const course of courses) {
    CourseCardItem(course);
  }
}

function CourseCardItem(course) {
  let courseItem = document.createElement("div");
  courseItem.setAttribute("class", "col-md-3");
  courseItem.setAttribute("id", course.id);

  let courseCard = document.createElement("div");
  courseCard.setAttribute("class", "card m-1 p-2");

  let courseImage = document.createElement("img");
  courseImage.setAttribute("src", course.imageUrl);
  courseImage.setAttribute("alt", course.title);
  courseImage.setAttribute("height", "150px");

  courseImage.setAttribute("class", "card-img-top");

  courseCard.append(courseImage);

  let courseCardBody = document.createElement("div");
  courseCardBody.setAttribute("class", "card-body");

  let courseRating = document.createElement("div");

  for (i = 0; i < course.rating; i++) {
    courseRating.innerHTML +=
      '<span style="color: Dodgerblue;" > <i class="fas fa-star"></i></span>';
  }

  courseCardBody.appendChild(courseRating);

  // title
  let courseTitle = document.createElement("h5");
  courseTitle.setAttribute("class", "card-title");
  courseTitle.innerHTML = course.title;
  courseCardBody.append(courseTitle);
  //price
  let coursePrice = document.createElement("h5");
  coursePrice.setAttribute("class", "card-text");
  coursePrice.innerHTML += "₹." + course.price;
  courseCardBody.append(coursePrice);

  // likes
  let courseLikes = document.createElement("button");
  courseLikes.setAttribute("class", "btn btn-primary");
  courseLikes.innerHTML = course.likes;

  // let courseLikesIcon = document.createElement('i');
  // courseLikesIcon.setAttribute('class', 'far fa-thumbs-up');
  courseLikes.innerHTML += '<i class="far fa-thumbs-up"></i>';

  // delete
  let courseDelete = document.createElement("button");
  courseDelete.setAttribute("class", "btn btn-danger mx-1");
  courseDelete.addEventListener("click", () => DeleteACourse(course.id));

  courseDelete.innerHTML = '<i class="fa fa-trash"></i>';

  courseCardBody.append(courseLikes);
  courseCardBody.append(courseDelete);

  courseCard.append(courseCardBody);
  courseItem.append(courseCard);
  document.querySelector(".courselist").appendChild(courseItem);
}

async function DeleteACourse(theCourseId) {
  // fetch API -> Delete

  let response = await fetch(`http://localhost:3000/courses/${theCourseId}`, {
    method: "DELETE",
  });
  let message = await response.json();
  if (message.msg === "success") {
    // delete from DOM logic here
    document.getElementById(theCourseId).remove(); // manipulate the DOM
  }
}

window.addEventListener("DOMContentLoaded", FetchCourses);

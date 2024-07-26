console.log("Hello from JavaScript!");

// /////////
// The basic: forEach + using a defined arrow function 
// /////////
const students = ["Jonas", "Mint", "Eri", "Kevin"];

// students.forEach((student) => {
//   console.log(`${student} is amazing!`);
// });

const greeting = (name) => {
  console.log(`Hello ${name}!`);
  return "Hello";
};

// students.forEach(greeting);

// const superStudents = students.map((student) => {
//   return `Super ${student}`
// });

const superStudents = students.map(student => `Super ${student}`);
// console.log(superStudents);


// /////////
// Iterator
// /////////
const otherStudents = ["Anamol", "Chae", "Akitaka", "Steven"];

let liContent = "";

otherStudents.forEach((student) => {
  liContent += `<li class="student" style="text-shadow: goldenrod 0px 0px 8px">${student}</li>`
});

const ulContent = `<ul>${liContent}</ul>`;

// document.body.insertAdjacentHTML("beforeend", ulContent);
document.querySelector(".container").insertAdjacentHTML("beforeend", ulContent);


// DATA ATTRIBUTES
// ///////////////

const max = document.querySelector("ul#project-z > li.dev");
// console.log(max);

const ryuya = document.querySelector("li.dev:nth-child(2)");
// console.log(ryuya);

// console.log(max.dataset);
// console.log(max.dataset.myPassion);

const devs = document.querySelectorAll(".dev");
devs.forEach((dev) => {
  // console.log(dev);
  // dev is a li HTML element
  const role = dev.dataset.role;
  dev.innerText += ` (${role})`;
});

// /////////
// Events
// /////////

// The full JS cycle, including events

// 1. select elements, imgs (that will be interacted with, that will be changed)
const avatars = document.querySelectorAll(".student-img");

avatars.forEach((avatar) => {
  // 2. Listen to a click on the img
  avatar.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.currentTarget);
    const clickedElement = event.currentTarget;
    // 3. Change the DOM, add/remove .selected class
    clickedElement.classList.toggle("selected");
  });
});

// preventDefault

const clickMe = document.querySelector("#link");
clickMe.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});


// The full JS cycle, advanced! 💪

// 1. Select elements, selectAll, checkboxes
const selectAll = document.querySelector("#select-all");
const checkboxes = document.querySelectorAll(".form-check-input");

// 2. Listen to a click on selectAll
let isSelected = false;

const handleSelectAll = (event) => {
  console.log(event);
  const clickedElement = event.currentTarget;
  // 3. Change the DOM, tick the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !isSelected;
  });
  clickedElement.innerText = isSelected ? "Select all" : "Remove all";
  isSelected = !isSelected;
}

selectAll.addEventListener("click", handleSelectAll);

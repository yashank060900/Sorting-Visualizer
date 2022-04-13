// alert("Happy Learning"); alert is js func... window object.

// const name = "Yash";
// const age = 21;

// // concatenation string

// console.log("My name is " + name + ' and I am " + age');

// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// Arrays.. hold multiple values

// const number = new Array(1, 2, 3, 4, 5);

// console.log(number);

// const fruits = ["banana", "apple", "orange"];

// console.log(fruits[2]);

// OBJECT Literals

// const person = {
//   FirstName: "Yash",
//   LastName: "Maski",
//   Age: 20,
//   Hobbies: ["Cricket", "Dance", "Music"],
//   Carrer: {
//     job: "Dev",
//     Company: "Google",
//   },
// };

// console.log(person.FirstName, person.LastName);

// console.log(person.Carrer.job);

/*
const ArrayOfObj = [
  {
    id: 1,
    name: "A",
    age: 10,
  },
  {
    id: 2,
    name: "B",
    age: 20,
  },
  {
    id: 3,
    name: "C",
    age: 30,
  },
]; */

// for (let i = 0; i < ArrayOfObj.length; i++) {
//   console.log(ArrayOfObj[i].name, ArrayOfObj[i].age);
// }

// for (let aob of ArrayOfObj) {
//   console.log(aob.name, aob.age);
// }

// ArrayOfObj.forEach(function (aob) {
//   console.log(aob.id, aob.name, aob.age);
// });

// const tempMapArr = ArrayOfObj.map(function (aob) {
//   return aob.name;
// });

// console.log(tempMapArr);

// const tempFilterArr = ArrayOfObj.filter(function (aob) {
//   return aob.id > 2;
// });

// console.log(tempFilterArr);

// const tempFilterMapArr = ArrayOfObj.filter(function (aob) {
//   return aob.id > 2;
// }).map(function (aob) {
//   return aob.name;
// });

// console.log(tempFilterMapArr);

// Dom Document Object Model

// single element selector

/*
document.getElementById();
document.querySelector();
*/

// multiple element selector
/*
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelectorAll();
*/

// const getEle = document.querySelectorAll(".item");

// getEle.forEach((element) => {
//   console.log(element);
// });

// const getEle = document.querySelector(".items");
// // getEle.remove();
// // getEle.lastElementChild.remove();

// getEle.firstElementChild.textContent = "Hello";
// getEle.children[1].innerText = "yash";
// getEle.lastElementChild.innerHTML = "<h1 style='color : red';>Hello</h1>";

const btn = document.querySelector(".btn");

// btn.style.background = "red";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  btn.style.background = "red";
});

// USER FORM SCRIPT

/*

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

*/

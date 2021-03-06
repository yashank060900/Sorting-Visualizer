// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// to create new Array input size of array
// here 60 is default value
function createNewArray(noOfBars = 40) {
  // calling helper function to delete old bars from dom
  deleteChild();

  // creating an array of random numbers;
  array = [];

  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 200) + 1);
  }

  console.log(array);

  // Now select the div #bars element
  const bars = document.querySelector("#bars");

  // Create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2 + 50}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.innerHTML = bar.style.height.replace(/[^0-9\.]+/g, "");
    // bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

// Selecting size slider from DOM
let arraySize = document.querySelector("#arr_sz");

// Event listener to update the bars on the UI
arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  console.log("In swap()");
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el1.innerHTML = el1.style.height.replace(/[^0-9\.]+/g, "");
  el2.style.height = temp;
  el2.innerHTML = el2.style.height.replace(/[^0-9\.]+/g, "");
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// const smallDevice = window.matchMedia("(min-width: 576px)");

// smallDevice.addListener(handleDeviceChange);

// function handleDeviceChange(e) {
//   if (e.matches) {
//     // outputElement.textContent = "Bigger Than Mobile";
//     console.log("bigger");
//     const arraySize = document.querySelector("#arr_sz");
//     createNewArray();
//     arraySize.value = 40;
//     arraySize.max = 50;
//   } else {
//     console.log("smaller");
//     const arraySize = document.querySelector("#arr_sz");
//     arraySize.value = 20;
//     arraySize.max = 20;
//     createNewArray(20);
//   }
// }

// // Run it initially
// handleDeviceChange(smallDevice);

import selectionSort from "./selectionSort.js";
import insertionSort from "./insertionSort.js";
import bubbleSort from "./bubbleSort.js";
import quickSort from "./quicksort.js";
import mergeSort from "./mergeSort.js";
import timer from "./utils/timer.js";

let start = false;
let algoToVisualize = "quickSort";
let arrSize = 30;
let randomHeights = generateRandomArray(arrSize);
let time;

document.getElementById("sortButton").addEventListener("click", (data) => {
  start = true;
});
document.getElementById("algorithms").addEventListener("change", (event) => {
  console.log("change");
  algoToVisualize = event.target.value;
});
document.getElementById("arrSize").addEventListener("change", (event) => {
  arrSize = parseInt(event.target.value);
  randomHeights = generateRandomArray(arrSize);
  start = false;
  m = 0;
  n = 0;
});
document.getElementById("resetButton").addEventListener("click", (data) => {
  start = false;
  clearTimeout(time);
  timer.reset();

  currentRange = [];
  randomHeights = generateRandomArray(arrSize);
});
let currentRange = [];
//these two variable to perform two sort

new p5(function (p5) {
  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, 400);
  };
  p5.draw = function () {
    // console.log(currentRange);
    if (start == true) {
      time = setInterval(timer.setTime, 10);
      switch (algoToVisualize) {
        case "quickSort":
          quickSort(randomHeights, currentRange, time);
          console.log("quick sort selected");
          break;
        case "mergeSort":
          mergeSort(randomHeights, currentRange, time);
          break;
        case "insertionSort":
          insertionSort(randomHeights, currentRange, time);
          break;
        case "selectionSort":
          selectionSort(randomHeights, currentRange, time);
          break;
        case "bubbleSort":
          bubbleSort(randomHeights, currentRange, time);
          break;
      }
      start = false;
    }
    //   console.log("m,n", m, n);
    p5.background(200);
    let xpos = 5;
    for (let k = 0; k < arrSize; k++) {
      //if not sorted color black
      p5.fill(0);
      if (k >= currentRange[0] && k <= currentRange[1]) {
        p5.fill(255, 0, 0);
      }
      //show rect equal to random height
      p5.rect(xpos, p5.height - randomHeights[k] - 10, 10, randomHeights[k]);
      //if current rect is the rect being swapped then show trainge below it
      if (k == currentRange[2]) {
        p5.fill(0, 0, 255);
        //three coordinate of traingle
        p5.triangle(
          xpos,
          p5.height,
          xpos + 10,
          p5.height,
          xpos + 5,
          p5.height - 10
        );
      }

      //to fit the number of rectangele in screen width
      xpos = xpos + p5.windowWidth / (arrSize + 2);
    }
  };
});

function generateRandomArray(length) {
  let randomNumbers = [];
  for (let i = 0; i < length; i++) {
    randomNumbers.push(getRandomInt(5, 300));
  }
  return randomNumbers;
}

//copied from stackoverflow
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

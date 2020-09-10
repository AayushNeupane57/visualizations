import selectionSort from "./selectionSort.js";
import insertionSort from "./insertionSort.js";
import bubbleSort from "./bubbleSort.js";

let start = false;
let algoToVisualize = "selectionSort";
let arrSize = 30;
let randomHeights = generateRandomArray(arrSize);
let m = 0;
let n = 0;

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
  m = 0;
  n = 0;
  randomHeights = generateRandomArray(arrSize);
  console.log("reset callde");
});

//these two variable to perform two sort

new p5(function (p5) {
  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, 400);
  };
  p5.draw = function () {
    //   console.log("m,n", m, n);
    p5.background(200);
    let xpos = 5;
    for (let k = 0; k < arrSize; k++) {
      //if not sorted color black
      p5.fill(0);
      //if is sorted color red
      let sortedCondition =
        algoToVisualize !== "bubbleSort" ? k < m : k >= arrSize - m;

      if (k == n) {
        p5.fill(0, 0, 255);
      } else if (sortedCondition) {
        p5.fill(200, 0, 0);
      }
      //show rect equal to random height
      p5.rect(xpos, p5.height - randomHeights[k] - 10, 10, randomHeights[k]);
      //if current rect is the rect being swapped then show trainge below it
      if (k == n) {
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

    if (start == true) {
      let sort;
      switch (algoToVisualize) {
        case "selectionSort":
          sort = selectionSort;
          break;
        case "insertionSort":
          sort = insertionSort;
          break;
        case "bubbleSort":
          sort = bubbleSort;
          break;
      }
      //value of m and n is modified in sort function which is returned as array from sort funtion
      let mAndN = sort(p5, m, n, randomHeights);
      m = mAndN[0];
      n = mAndN[1];
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

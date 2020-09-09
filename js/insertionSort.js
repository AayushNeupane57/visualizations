let randomHeights;
let arrSize = 50;

function setup() {
  createCanvas(windowWidth, 400);
  randomHeights = generateRandomArray(arrSize);
}

//these two variable to perform two sort
let m = 0;
let n = 1;
let minValueIndex = 0;

function draw() {
  //   console.log("m,n", m, n);
  background(200);
  let xpos = 5;
  for (let k = 0; k < arrSize; k++) {
    //if not sorted color black
    fill(0);
    //if is sorted color red
    if (k == n) {
      fill(0, 0, 255);
    } else if (k < m) {
      fill(200, 0, 0);
    }

    console.log("k,n", k, n);
    //show rect equal to random height
    rect(xpos, height - randomHeights[k] - 10, 10, randomHeights[k]);
    //if current rect is the rect being swapped then show trainge below it
    if (k == n) {
      fill(0, 0, 255);
      //three coordinate of traingle
      triangle(xpos, height, xpos + 10, height, xpos + 5, height - 10);
    }

    //to fit the number of rectangele in screen width
    xpos = xpos + windowWidth / (arrSize + 2);
  }
  //variables for swap

  if (n > 0 && randomHeights[n] < randomHeights[n - 1]) {
    swap(randomHeights, n, n - 1);
    n = n - 1;
  } else {
    n = m;
    m++;
  }

  //each item is sorted?
  if (m > randomHeights.length) {
    console.log("complete");
    noLoop();
  }
}

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function generateRandomArray(length) {
  let randomNumbers = [];
  for (let i = 0; i < length; i++) {
    randomNumbers.push(getRandomInt(5, 300));
  }
  return randomNumbers;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

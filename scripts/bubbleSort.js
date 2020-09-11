async function bubbleSort(randomHeights, currentRange, time) {
  for (let i = 0; i < randomHeights.length; i++) {
    currentRange[0] = randomHeights.length - i - 1;
    currentRange[1] = randomHeights.length - 1;
    for (let j = 0; j < randomHeights.length - 1 - i; j++) {
      currentRange[2] = j;
      if (randomHeights[j] > randomHeights[j + 1]) {
        await swap(randomHeights, j, j + 1);
      }
    }
  }
  clearTimeout(time);
}

//this is made async to take time and draw to the canvas
let swap = async (arr, i, j) => {
  await sleep(10);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default bubbleSort;

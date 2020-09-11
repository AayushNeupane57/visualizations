async function insertionSort(randomHeights, currentRange,time) {
  currentRange[0] = 0;

  for (let i = 1; i < randomHeights.length; i++) {
    currentRange[1] = i;
    let j = i;
    while (j >= 0 && randomHeights[j] < randomHeights[j - 1]) {
      currentRange[2] = j;
      await swap(randomHeights, j, j - 1);
      j--;
    }
  }
  clearTimeout(time)
}

let swap = async (arr, i, j) => {
  await sleep(10);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default insertionSort;

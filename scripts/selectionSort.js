export default async (randomHeights, currentRange) => {
  for (let i = 0; i < randomHeights.length; i++) {
    currentRange[0] = 0;
    currentRange[1] = i - 1;
    let minValueIndex = i;
    for (let j = i + 1; j < randomHeights.length; j++) {
      currentRange[2] = j;
      await sleep(10);
      if (randomHeights[j] < randomHeights[minValueIndex]) {
        minValueIndex = j;
      }
    }
    await swap(randomHeights, minValueIndex, i);
  }
};

let swap = async (arr, i, j) => {
  await sleep(10);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

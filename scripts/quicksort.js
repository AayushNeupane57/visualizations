//quick sort implemetation using hoare's three way partitioning method
async function qsort(arr, currentRange, time) {
  let low = 0;
  let high = arr.length - 1;
  await sort(arr, low, high, currentRange);
  clearTimeout(time);
}

async function sort(arr, low, high, currentRange) {
  if (high <= low) return;
  currentRange[0] = low;
  currentRange[1] = high;
  let pivot = arr[low];
  let i = low + 1;
  let gt = high;
  let lt = low;
  while (i <= gt) {
    if (arr[i] == pivot) {
      i++;
    }
    if (arr[i] < pivot) {
      await swap(arr, i, lt);
      i++;
      lt++;
    } else {
      await swap(arr, i, gt);
      gt--;
    }
  }
  await sort(arr, low, lt - 1, currentRange);
  await sort(arr, gt + 1, high, currentRange);
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
export default qsort;

function bubbleSort(p5, m, n, randomHeights) {
  if (randomHeights[n] > randomHeights[n + 1]) {
    swap(randomHeights, n, n + 1);
  }

  //variables for swap
  n++;
  if (n >= randomHeights.length - 1 - m) {
    m++;
    n = 0;
  }
  //each item is sorted?
  return [m, n];
}

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
export default bubbleSort;

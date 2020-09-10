let minValueIndex = 0;

export default (p5, m, n, randomHeights) => {
  //variables for swap
  n++;
  minValueIndex =
    randomHeights[n] < randomHeights[minValueIndex] ? n : minValueIndex;
  if (n >= randomHeights.length) {
    swap(randomHeights, m, minValueIndex);
    m++;
    n = m;
    minValueIndex = m;
  }
  //each item is sorted?
  if (m >= randomHeights.length) {
    minValueIndex = 0;
  }
  return [m, n];
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

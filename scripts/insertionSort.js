function insertionSort(p5, m, n, randomHeights) {
  //variables for swap

  if (n > 0 && randomHeights[n] < randomHeights[n - 1]) {
    swap(randomHeights, n, n - 1);
    n = n - 1;
  } else {
    n = m;
    m++;
  }
  return [m, n];
}

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export default insertionSort;

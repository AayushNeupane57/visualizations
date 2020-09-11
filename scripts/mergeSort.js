async function msort(randomHeights, currentRange, time) {
  let low = 0;
  let high = randomHeights.length - 1;
  let aux = [];
  await sort(randomHeights, low, high, aux, currentRange);
  clearTimeout(time);
}

async function sort(randomHeights, low, high, aux, currentRange) {
  if (low >= high) return;

  let mid = parseInt((low + high) / 2);

  await sort(randomHeights, low, mid, aux, currentRange);
  await sort(randomHeights, mid + 1, high, aux, currentRange);
  await merge(randomHeights, low, mid, high, aux, currentRange);
}
async function merge(a, low, mid, high, aux, currentRange) {
  currentRange[0] = low;
  currentRange[1] = high;
  for (let i = low; i <= high; i++) {
    aux[i] = a[i];
  }
  let j = mid + 1;
  let k = low;
  for (let i = low; i <= high; i++) {
    currentRange[2] = i;
    await sleep(10);
    if (k > mid) {
      a[i] = aux[j];
      j++;
    } else if (j > high) {
      a[i] = aux[k];
      k++;
    } else if (aux[k] < aux[j]) {
      a[i] = aux[k];
      k++;
    } else {
      a[i] = aux[j];
      j++;
    }
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default msort;

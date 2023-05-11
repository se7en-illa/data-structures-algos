function rotateArray(arr, k) {
  if (k === 0) return arr;

  k = k % arr.length;

  for (let i = 0; i < k; i++) {
    let firstEl = arr[0];

    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = firstEl;
  }
  return arr;
}

console.log("rotateArray", rotateArray([1, 2, 3, 4, 5, 6], 2)); // [3,4,5,6,1,2]

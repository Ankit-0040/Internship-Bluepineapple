function arr_sum(arr, size) {
  if (size <= 0) {
    return 0;
  } else {
    return arr_sum(arr, size - 1) + arr[size - 1];
  }
}

let array = [12, 3, 5, 30];
let size = array.length;
// console.log(size);
// console.log(array);
let sum = arr_sum(array, size);
console.log(sum);

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return "The average is:"  + avg;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));


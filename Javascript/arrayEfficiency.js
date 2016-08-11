// Array Efficiency
// -> do not delete array elements
// -> ints are the fastest variable types
// -> full arrays are faster than broken up arrays
// -> deleted items in array will make things much slower
// -> do not push item into array
// Using array.push() is slower than assigning a value to an array

// **EXAMPLE of best practice
var arr = [];

for(var i = 0; i < 30; i++) {
  // arr.push(i);
  arr[i] = i;
}

console.log(arr);
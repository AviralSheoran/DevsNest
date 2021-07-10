// !Write a JavaScript function to check whether an `input` is an array or not
// Test Data :

function is_array(input) {
  return Array.isArray(input);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// !Write a JavaScript function to clone an array
// Test Data :

function array_Clone(input) {
  return input.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// !Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :

function first(input) {
  return input.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

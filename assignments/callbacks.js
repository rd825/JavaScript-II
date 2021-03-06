// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// ========================================================================================================================================= 
// PROBLEM 1

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
})

// =========================================================================================================================================
// PROBLEM 2

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(lastItem) {
  console.log(lastItem)
});

// =========================================================================================================================================
// PROBLEM 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

sumNums(3,4,function(sum){
  console.log(sum);
})

// =========================================================================================================================================
// PROBLEM 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

multiplyNums(3,4,function(product){
  console.log(product);
})

// =========================================================================================================================================
// PROBLEM 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item) === true) {
    return cb(true);
  }
  else {
    return cb(false);
  }
}

contains('yo-yo', items, function(value){
  console.log(value);
})

// =========================================================================================================================================

/* STRETCH PROBLEM */

exampleArray = [1,1,1,1,1,1,2,3,4,5,6,7,8,8,8,9,9]

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let deduped = Array.from(new Set(array)); // the Set object only accepts uniques. While this is a technicality, it's nice to know about.
  return cb(deduped);
}

removeDuplicates(exampleArray, function(value){
  console.log(value);
})

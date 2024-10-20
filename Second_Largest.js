//Find the second largest value and remove the first largest value from an array,
let a = [2, 6, 1, 7, 9, 25, 2, 13];

// Step 1: Find the largest value
let largest = Math.max(...a);  //Math.max(2, 6, 1, 7, 9, 25, 2, 13)

// Step 2: Remove the largest value (assuming only one occurrence)
a = a.filter(num => num !== largest);

// Step 3: Find the second largest value
let secondLargest = Math.max(...a);

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
console.log("Array after removing the largest value:", a);

// function mergeSortedArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }

// // Example usage:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// const result = mergeSortedArrays(array1, array2);
// console.log(result);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//==========================================
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const array3=array1.concat(array2); // Output: [1, 3, 5, 7, 2, 4, 6, 8] 
const array4 = array3.sort((a, b) =>a-b);
console.log(array3);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array4);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
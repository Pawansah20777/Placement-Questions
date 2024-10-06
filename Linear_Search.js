function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return `Element found at index: ${i}`
      }
  }
  return "Element not found in the array."; 
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(arr, target);

console.log(result);












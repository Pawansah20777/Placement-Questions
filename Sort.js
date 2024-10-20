let a = [2, 6, 14, 53, 1]; // Original array
let b = a.sort((a, b) => a - b); // Sorts the array and assigns the reference to b
console.log(b); // Outputs: [1, 2, 6, 14, 53]
console.log(a); // Outputs: [1, 2, 6, 14, 53] (original array is modified)

let c = [2, 6, 14, 53, 1];
let d = [...c].sort((x, y) => x - y); // Create a copy of a before sorting
console.log(d); // Outputs: [1, 2, 6, 14, 53]
console.log(c); // Outputs: [2, 6, 14, 53, 1] (original array remains unchanged)

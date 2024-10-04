// Bitwise AND operator.
let m = 8; // Binary: 1000
let n = 4; // Binary: 0100

console.log(m & n); // Output: 0

//=======================================
// logical AND operator.
let a = 8; // Truthy
let b = 4; // Truthy
console.log(a && b); // Output: 4

//=======================================

// Summary of Operations
// & - Bitwise AND
// | - Bitwise OR
// ^ - Bitwise XOR
// ~ - Bitwise NOT

let p = 5; // Binary: 0101
let q = 3; // Binary: 0011

console.log(p & q); // Output: 1
console.log(p | q); // Output: 7
console.log(p ^ q); // Output: 6
//The bitwise NOT operator is a unary operator, meaning it only takes one operand.
console.log(~p); // Output: -6
console.log(p << 1); // Left Shift  // Output: 10
console.log(p >> 1); // Right Shift  // Output: 2
console.log(-1 >>> 1); // Unsigned Right Shift // Output: 2147483647

// Bitwise AND operator.
//If both bits are 1, the result for that position will be 1.
//If either bit is 0, the result for that position will be 0.
let m = 8; // Binary: 1000
let n = 4; // Binary: 0100

console.log(m & n); // Output: 0


//Q.2
//   1111   (m = 15)
// & 1001 (n = 9)
// ---------------
//   1001   (result = 9)


//Q.3
//   1100   (m = 12)
// & 1010   (n = 10)
// -------
//   1000   (result = 8)


//=======================================

// Q.4 Bitwise OR (|)
// The bitwise OR compares each bit of p and q. It returns 1 if either of the bits is 1.

//   0101   (p = 5)
// | 0011   (q = 3)
// -------
//   0111   (result = 7)

//====================================================

// 5. Bitwise XOR (^)
// The bitwise XOR compares each bit of p and q. It returns 1 if only one of the bits is 1 (but not both).
//similar values=0 
//different values= 1

//   0101   (p = 5)
// ^ 0011   (q = 3)
// -------
//   0110   (result = 6)


//========================================================

// logical AND operator.
//If the first value is falsy (like 0, null, undefined, false, NaN, or ""), 
//it returns the first value.
//If the first value is truthy, it evaluates the second value and returns it.

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
//The bitwise NOT operation essentially calculates -(x + 1) for any integer x. For p = 5:
console.log(~p); // Output: -6
console.log(p << 1); // Left Shift  // Output: 10
console.log(p >> 1); // Right Shift  // Output: 2
console.log(-1 >>> 1); // Unsigned Right Shift // Output: 2147483647

//1.swap with third varibale
// let a=2;
// let b=3;

// let temp = a;
// a = b;
// b = temp;

// console.log(a,b);

//=============================================

//2.swap without third varibale
// let a = 2;
// let b = 3;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a,b);

//=============================================
//3.Swapping
// let i = 10;
// let j = 20;
// [i, j] = [j, i];
// console.log(i, j); //Output: 20 10

//=============================================
//same-same zero
//different 1
let a = 5;
let b = 4;

a = a ^ b; // Step 1: Store the XOR of a and b in a
b = a ^ b; // Step 2: Get the original value of a
a = a ^ b; // Step 3: Get the original value of b

console.log(a, b); // Output: 4 5

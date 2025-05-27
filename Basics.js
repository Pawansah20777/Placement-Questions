//The + operator, when used with strings, performs string concatenation, not arithmetic  addition.
//The - operator,does not perform string concatenation but rather arithmetic subtraction.

let a = "2";
let b = "3";
console.log(a + b); //Output: 23

let x = 2;
let y = "3";
console.log(x + y); //Output: 23

let c = "2";
let d = "3";
console.log(c - d); //Output: -1

let c1 = 2;
let d1 = "3";
console.log(c1 - d1); //Output: -1

let e = "2";
let f = "3";
console.log(e * f); //Output: 6

let g = 2;
let h = "3";
console.log(c * b); //Output: 6

let i = 10;
let j = 5;
console.log(i + j * 2); //Output: 20

let k = 5;
let l = k++;
console.log(k + l); //Output: 11

console.log(2 * 5 + 3 ** 2); //Output: 19

//In JavaScript, there is no built-in append method for arrays.
let arr = [1, 2, 3];
let m = arr;
m.push(4); //m.append(4);
console.log(m); // Output: [1,2,3,4]
console.log(arr); //[ 1, 2, 3, 4 ]

let arr1 = [1, 2, 3];
let m1 = arr1;
console.log(m1); //[ 1, 2, 3 ]
console.log(arr1==m1) //true


//Q.Primitive vs. Non-Primitive Data Types

//1.Primitive Data Types (e.g., numbers, strings, booleans):
// Primitive values are immutable, 
// These are stored as values directly in memory.
// When you assign one variable to another, the value is copied.
// Changing one variable doesn't affect the other.


// primitive values (or primitive data types) in JavaScript are immutable. This means their values cannot be changed once they are created. However, it's important to understand that immutability applies to the values themselves, not the variables holding them.

// What Are Primitive Data Types?
// In JavaScript, primitive data types include:

// Numbers (e.g., 10, 5.3)
// Strings (e.g., "hello", 'world')
// Booleans (e.g., true, false)
// Undefined
// Null
// Symbols (e.g., Symbol('description'))
// BigInt (e.g., 123n)
// Why Are They Immutable?
// Immutability means that once a value is created, it cannot be altered or changed directly. If you try to modify the value, you'll create a new one, rather than changing the original.


// let a = 10;
// let b = a; // b gets a copy of a's value
// b = 20;    // changing b doesn't affect a
// console.log(a); // 10
// console.log(b); // 20


//2.Non-Primitive Data Types (e.g., objects, arrays):
// These are stored as references in memory.
// When you assign one variable to another, both variables point to the same memory location.
// Modifying the data through one reference will affect the data visible through the other.

let obj1 = { name: "Andrew" };
let obj2 = obj1; // obj2 gets a reference to obj1's memory location
obj2.name = "Thomas"; // modifying obj2 changes obj1
console.log(obj1.name); // "Thomas"
console.log(obj2.name); // "Thomas"


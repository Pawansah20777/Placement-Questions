let n = 0.1;
let o = 0.2;
let p = 0.3;
console.log(n + o); //Output:0.30000000000000004
console.log(n + o == p); //Output:false

//Q.1 Floating-point precision issue:
let a = 0.3;
let b = 0.1;
let c = 0.2;
console.log(a - b); //Output:0.19999999999999998
console.log(a - b === c); // Output: false

let q = true + true + false; // true is treated as 1, false as 0
let r = true + false + false;
console.log(q, r); // Output: 2 1

// //Example of Arithmetic with True and False in Python:
// q = True + True + False; // True is 1, False is 0
// r = True + False + False;

// print(q, r); // Output: 2 1

//Q.2 Implicit type coercion:
let x = "5" + 3;
let y = "5" - 3;
let z = 5 + "3" - 2;
console.log(x, y, z); // Output: '53', 2, 51

//Q.3 Comparison with == vs ===
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
console.log([] == 0); // Output: true

//Q.4 Adding arrays and strings:
let arr = [1, 2];
console.log(arr + 1); // Output: '1,21'
console.log([] + []); // Output: ''

let str = "10";
let num = 20;
console.log(str + num); // Output: '1020'
console.log(+str + num); // Output: 30

let arr1 = [1, 2];
let arr2 = [1, 2];
console.log(arr1 == arr2); // Output: false

console.log([] + []); // Output: ""
console.log(true + false); // Output: 1
console.log([] == false); // Output: true
//1 < 2 evaluates to true.
//Now, the expression becomes true < 3. In JavaScript, true is coerced to the number 1, so the expression becomes 1 < 3, which is true
console.log(1 < 2 < 3); // Output: true

//console.log(3 > 2 > 1);
//Step 1: 3 > 2 evaluates to true.
//Step 2: Now, the expression becomes true > 1. Again, true is coerced to the number 1, so the expression becomes 1 > 1, which is false.
console.log(3 > 2 > 1); // Output: false

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
console.log(c - b); //Output: -1

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

let arr1 = [1, 2, 3];
let m1 = arr1;
console.log(m1); //[ 1, 2, 3 ]
console.log(arr1==m1) //true
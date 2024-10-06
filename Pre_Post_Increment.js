//x++ (post-increment):
//First, it returns the original value of x.
//Then, it increments x by 1

let x = 5;
let y = x++;  // y gets the value 5, and then x becomes 6
console.log(x, y);  // Output: 6 5


//==================================================

//++x (pre-increment):
//First, it increments x by 1.
//Then, it returns the incremented value

let a = 5;
let b = ++a;  // x is incremented to 6, then y gets the value 6
console.log(a, b);  // Output: 6 6


//==================================================
for (let i = 0; i < 3; ++i) {
  console.log(i);  // Output: 0, 1, 2 
}

//==================================================

let p = 2;
let q = (p++) + 5;  // q gets (2 + 5) = 7, then p becomes 3
console.log(p, q);  // Output: 3 7


//==================================================

let r = 2;
let s = (++r) + 5;  // r is incremented to 3 first, then s gets (3 + 5) = 8
console.log(r, s);  // Output: 3 8

//==================================================

// function incrementPost(x) {
//   return x++;  // x is returned first, then incremented
// }

// let x = 10;
// let result = incrementPost(x);  
// console.log(result);  // Output: 10 (original value of x)
// console.log(x);       // Output: 10 (x outside the function remains unchanged)

//==================================================

// function incrementPre(x) {
//   return ++x;  // x is incremented first, then returned
// }

// let x = 10;
// let result = incrementPre(x);
// console.log(result);  // Output: 11 (x is incremented before returning)
// console.log(x);       // Output: 10 (x outside the function remains unchanged)

//==================================================

// let x = 3;

// if (x++ < 5) {
//     console.log("Condition is true");
// } else {
//     console.log("Condition is false");
// }
// console.log(x);  // Output: Condition is true, 4

//==================================================

// let x = 3;

// if (++x < 5) {
//     console.log("Condition is true");
// } else {
//     console.log("Condition is false");
// }
// console.log(x);  // Output: Condition is true, 4

//==================================================

// let arr = [10, 20, 30];
// let i = 0;

// console.log(arr[i++]);  // Output: 10 (first, index 0 is used, then i becomes 1)
// console.log(i);         // Output: 1 (i is now incremented)

//==================================================

// let arr = [10, 20, 30];
// let i = 0;

// console.log(arr[++i]);  // Output: 20 (i is incremented to 1 first, then used)
// console.log(i);         // Output: 1 (i is now 1)

//==================================================

// let x = 2;
// let y = 3;

// let z = (x++) + (y++);  // x is 2, y is 3, so z becomes (2 + 3) = 5; 
//                         //then x and y are incremented
// console.log(x, y, z);   // Output: 3 4 5

//==================================================

// let x = 2;
// let y = 3;

// let z = (++x) + (++y);  // x becomes 3, y becomes 4, so z becomes (3 + 4) = 7
// console.log(x, y, z);   // Output: 3 4 7

//==================================================

// let i = 0;

// while (i++ < 3) {
//     console.log(i);  // Output: 1, 2, 3
// }
// console.log(i);  // Output: 4

//==================================================

// let i = 0;

// while (++i < 3) {
//     console.log(i);  // Output: 1, 2
// }
// console.log(i);  // Output: 3
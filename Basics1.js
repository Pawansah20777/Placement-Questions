//Q.1 String concatenation and numeric addition:
let a = 1 + "2" + "3";
let b = "1" + 2 + 3;
console.log(a); // Output: "123"
console.log(b); // Output: "123"

//Q.2 Implicit type conversion with subtraction:
let c = "10" - 1;
let d = "10" - "2";
let e = "10" - "a";
console.log(c); // Output: 9
console.log(d); // Output: 8
console.log(e); // Output: NaN

//Q.3 Multiplying and dividing strings:
let f = "10" * "2";
let g = "10" / "2";
let h = "10" / "a";
console.log(f); // Output: 20
console.log(g); // Output: 5
console.log(h); // Output: NaN

//Q.4 Mixing Boolean with numbers:
let i = true + 1;
let j = false + 1;
let k = true - false;
console.log(i); // Output: 2
console.log(j); // Output: 1
console.log(k); // Output: 1

//Q.5 Comparison quirks:
let x = "10";
let y = 10;
console.log(x == y); // Output: true
console.log(x === y); // Output: false

//Q.6 Unary plus operator:
let z = "10";
let w = +"10"; // 'w' is a number,
//because the unary plus operator converts the string "10" to the number 10
console.log(z + 5); // Output: "105"
console.log(w + 5); // Output: 15

//Unary plus (+): Converts its operand into a number.
let x1 = "5";
console.log(+x1);  // Output: 5 (as a number)

//Q.7 Increment/decrement confusion:
let m = 10;
let n = m++ + ++m;
console.log(n); // Output: 22

//Q.8 Order of operations:
let o = 10;
let p = 5;
let q = o - p * o + p;
console.log(q); // Output: -35

//Q.9 Division with 0 and Infinity:
let r = 10 / 0;
let s = -10 / 0;
console.log(r); // Output: Infinity
console.log(s); // Output: -Infinity

//Q.10 Confusing comparison with null and undefined:
console.log(null == 0); // Output: false
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

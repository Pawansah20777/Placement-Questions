// evaluates powers from right to left.
console.log(2**3**2);

let a = 5;  // a is assigned the value 5
let b = a;  // b is assigned a *copy* of the value of a, which is 5
a = 10;     // a is now updated to 10, but this doesn't affect b
console.log(a, b); // Output: 10 5


const obj={
  a:1,
  b:2,
  a:4
};
console.log(obj.a) //Output:4


//Q.1 In JavaScript, functions are objects, and every function has a built-in .name property. 
//The .name property holds the name of the function.
function baby(){
  return "something";
}
console.log(baby.name) //Output:baby


//Q.2 For anonymous functions (e.g., functions assigned to a variable without a name),
// the .name property will hold an empty string ("").
let anon = function(){
  return "something else";
};
console.log(anon.name);  // Output: "amon"

//==================================================

let explicit = function namedFunc() {
  return "This is namedFunc";
};
console.log(explicit.name);  // Output: "namedFunc"

//==================================================
//Explanation: Even though obj1 and obj2 have the same properties and values, 
//they are two different objects in memory. 
//In JavaScript, objects are compared by reference, not by value.

const  obj1={
  name: 'John',
  age: 25
}

const  obj2={
  name: 'John',
  age: 25
}

console.log(obj1 === obj2); // Output: false

//==================================================

// const obj1 = {
//   name: 'John',
//   age: 25
// };

// const obj2 = obj1;  // Now both variables point to the same object

// console.log(obj1 === obj2);  // Output: true

//=====================================================
//In JavaScript, when you compare two arrays (or objects) using the equality operator (==), it checks for reference equality rather than value equality.

console.log([]==[]) //false

//==================================================

// let a=[];
// let b=false;
// console.log(a==b);//true

//=====================================================
// console.log([] == 0);  // true (empty array is coerced to 0)
// console.log([] === 0); // false (strict equality does not perform type coercion)

//=====================================================
// let a=[10,20,30];
// a[54]=2;
// console.log(a.length); //55

//====================================================
// function sum(a=5,b=7){
//   console.log(a+b)
// }
// sum(null,20) //output: 20
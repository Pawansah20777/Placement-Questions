// evaluates powers from right to left.
console.log(2**3**2);

let a=5;
let b=a;
a=10;
console.log(a,b) //Output:10 5

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
console.log(baby.name)


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


//Scope determines where a variable is accessible in your code. It can be global, function-scoped, or block-scoped.
//Keywords and Their Behavior:

//1.var:

//Global Scope: If declared outside any function, it can be accessed anywhere in the program.
//Function Scope: If declared inside a function, it is accessible throughout that function but not outside it.
//Not Block Scoped: If declared inside a block (like an if statement or loop), it can still be accessed outside that block.

//2.let and const:

//Global Scope: If declared outside any function, they can be accessed globally.
//Block Scope: If declared inside a block, they are only accessible within that block, not outside it.
//Not Function Scoped: They do not behave as function-scoped variables like var.

//Lexical Scope: This refers to how nested functions have access to variables declared in their parent scopes, allowing for closures.





//var keyword is global scope and function scope but not block scope.
//let and const is block scope

// var a=5;
// let a=6;

// console.log(a); //Output: SyntaxError: Identifier 'a' has already been declared

//=============================================================

//Q.Function Scope:

// function abc(){
//   var a =5;
//   console.log(a)
// }
// console.log(a)  //Output: ReferenceError: a is not defined
// abc();

//=============================================================

//Q.Block Scope:

// console.log(a) //Output:undefined
// {
//   var a=5;
// }

// console.log(a); //Output:5

//=============================================================

// console.log(a) //Output: ReferenceError: Cannot access 'a' before initialization
// console.log("hello")
// console.log("world");
// let a=5;
// console.log(a);

//===================================================
// function loopFunction() {
//   for (var i = 0; i < 3; i++) {
//       console.log(i);
//   }
//   console.log("Final value of i:",i); // Output: Final value of i: 3
// }

// loopFunction();

//===================================================
// if (false) {
//   var conditionVar = "I will not be assigned";
// }

// console.log(conditionVar); // Output: undefined, because `conditionVar` is hoisted and declared, but not assigned

//==========================================
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 3 3 3

//==========================================
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 0 1 2

//======================================
// if (true) {
//   var x = "I'm inside the block!";
// }

// console.log(x);  // Output: "I'm inside the block!"

//==============================================
// for (var i = 0; i < 5; i++) {
//   console.log(i);  // Outputs: 0, 1, 2, 3, 4
// }

// console.log(i);  // Output: 5 (accessible outside the loop)

//===================================================
function example() {
  if (true) {
      var x = 10; // Function-scoped
  }
  console.log(x); // Output: 10
}
example();

//=======================================
function exampleFunction() {
  var x = 10;
  if (true) {
      var x = 20; // Same `x`, since `var` is function-scoped
      console.log(x); // Output: 20
  }
  console.log(x); // Output: 20 (No block scope, `x` is overwritten)
}

exampleFunction();


//==========================================
// function example() {
//   if (true) {
//       var x = 10; // Function-scoped
//   }
//   console.log(x); // Output: 10
// }
console.log(x); // Output: ReferenceError: x is not defined

// example();


//Variables declared with var are function-scoped, so they cannot be accessed outside the function they are defined in.

//=========================================================
//Here’s a brief and clear explanation of const in JavaScript:

// const x; // ❌ Error! You must assign a value.
// const x = 5; // ✅ Correct.

// const x = 10;
// x = 20; // ❌ Error!

// Primitive values (e.g., number, string, boolean):
//  ->Cannot update or reassign.
// const name = "John";
// name = "Doe"; // ❌ Error!

// Non-primitive values (e.g., objects, arrays):
//   ->Can update properties or elements, but cannot reassign the variable itself.
// const person = { name: "John" };
// person.name = "Doe"; // ✅ Works!
// person = { name: "Alice" }; // ❌ Error!



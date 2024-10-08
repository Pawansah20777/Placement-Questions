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

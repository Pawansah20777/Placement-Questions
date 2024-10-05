// console.log(a); //ReferenceError: a is not defined

//===========================================================

let a;
console.log(a); // undefined

//=================================================================

//var x  it means declaration of a variable.

//Declaration: When you write var x;, JavaScript "declares/creates" the variable x before running the code, meaning it reserves space for it in memory. This is called "hoisting."

//Hoisting: Even though you declare x later in the code, JavaScript moves the declaration to the top in memory (hoisting), but not the value.

//Result: Before you assign a value (x = 5), JavaScript knows x exists but doesn’t know its value, so console.log(x) shows undefined.

//The declaration part is: var x; This is the part where the variable x is declared (created). It is hoisted to the top by JavaScript, so the variable x exists in memory before the code runs.

console.log(x); // Output: undefined (because the declaration is hoisted)
var x = 5; // Declaration is hoisted, but initialization happens here

//=================================================================

//var does not have this restriction, which is why it gives undefined instead of an error.

// console.log(y); //ReferenceError: Cannot access 'y' before initialization
// let y = 5;

//================================================================

var x; // Declaration is hoisted to the top
console.log(x); // Output: undefined (because x is declared but not yet initialized)
x = 5; // Initialization happens here

//===============================================================


greet(); // "Hello!" - You can call it before or after its declaration

// Function Declaration
function greet() {
  console.log("Hello!");
}

//===============================================================
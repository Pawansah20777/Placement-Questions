let x;
console.log(x); //output:undefined

//================================================

var y;
console.log(y); //output:undefined

//================================================

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;

//================================================


console.log(a); //output: undefined
var a = 5;

//Explanation behind the code:
var a; // Declaration is hoisted to the top
console.log(a); // This will log `undefined`
a = 5; // Initialization happens here

//=================================================

console.log(z); //output: undefined
var z= 5;
console.log(z); //output:5

//=================================================


// console.log(x); //Output: undefined
// var x = 5;

// var y; 
// console.log(y); //Output: undefined
// y = 5; 

//================================================

//Explanation Behind the code:
//let x;  Declaration is hoisted, but x is in the TDZ
// Note: TDZ (Temporal Dead Zone) starts here, so accessing x is not allowed until 
//it is initialized.


// the TDZ rules prevent access to a variable before its initialization point, but if the variable has been declared, even without initialization, it is recognized and can return undefined.

//Q.1Code with TDZ
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;

//Q.1Code without TDZ
// let x; 
// console.log(x); // outputs: undefined
// x = 5; 


//=====================================================
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;

// //behind the process
// {
//   let x; // Declaration only
// }
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// x = 5; // Not reached due to the error

//=====================================================
//====================================================
a = 6; // ReferenceError: Cannot access 'a' before initialization
console.log(a);
let a;

//==========================================================

{
  let a = 6; // 'a' is scoped to this block
}
console.log(a); // ReferenceError: 'a' is not defined
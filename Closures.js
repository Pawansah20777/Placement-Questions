//Que.1What is a closure and how is it useful?

//Answer: Closures allow a function to access variables from an outer scope even after the function has returned. They are useful in situations like creating private variables or in asynchronous code.

function abc() {
  let a = 5; // This variable is part of the closure
  return function () {
    return a; // The inner function is trying to access 'a'
  };
}

let closure = abc();
console.log(closure());

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

//Question 1: Nested Functions and Closures
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(2)); // Output: 7
console.log(add5(10)); // Output: 15

//Question 2: Function Scope and Closures
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(4)); // Output: 8
console.log(triple(4)); // Output: 12

//Question 3: Closures and Loops
function createCounters() {
  let counters = [];
  for (let i = 0; i < 3; i++) {
    counters[i] = function () {
      return i;
    };
  }
  return counters;
}

const countersArray = createCounters();
console.log(countersArray[0]()); // Output: 0
console.log(countersArray[1]()); // Output: 1
console.log(countersArray[2]()); // Output: 2

// function outerFunction() {
//   let count = 0;

//   // Returning an anonymous function (closure)
//   return function () {
//     console.log("a", count);
//     count++;
//     console.log("b", count);
//     return count; // Return the updated count
//   };
// }

// console.log("Calling outerFunction...");
// const counter = outerFunction();
// console.log("outerFunction returned a function. Now calling that function...");

// console.log(counter()); //output:1 Call the returned function and log the result
// console.log(counter()); //output:2
// console.log(counter()); //output:3


//closures allow the inner function to retain access to variables like
// a as part of its environment.
// function abc() {
//   let a = 5; // This variable is part of the closure
//   return function () {
//     return a; // The inner function is trying to access 'a'
//   };
// }

// let closure = abc();
// console.log(closure());


//============================================

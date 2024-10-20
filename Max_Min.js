//Find Max Number
let a = [1, 2, 3, 4, 5];
let Max = a.reduce((prev, curr) =>prev > curr ? prev : curr);
console.log(Max);

//Find Min Number
let a1 = [1, 2, 3, 4, 5];
let Min = a1.reduce((prev, curr) =>prev < curr ? prev : curr);
console.log(Min);

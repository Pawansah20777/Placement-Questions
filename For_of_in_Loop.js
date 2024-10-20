const obj = {
  name: "John",
  age: 30,
  price: 500,
  1:"pawan",
  2:"kumar",
  3:"sah"
};

console.log(Object.keys(obj));    // Output: ['name', 'age', 'price']
console.log(Object.values(obj));  // Output: ['John', 30, 500]

console.log(obj["name"]);         // Output: John
console.log(obj.age);             // Output: 30 // Accessing property using dot notation
console.log(obj[1]);              // Output: "pawan"
console.log(obj["2"]);            // Output: "kumar"

for (let i in obj) {
  console.log(i, obj[i]);
}
// Output:
// name John
// age 30
// price 500

//===========================================

let a = [1, 2, 3, 4, 5];

for (let i of a) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5

for (let i in a) {
  console.log(a[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5

//===========================================

const obj = {
  name: "John",
  age: 30,
  price: 500,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));

for (let i in obj) {
  console.log(i, obj[i]);
}

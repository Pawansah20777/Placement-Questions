//1.Reversing an Array:
let arr = [10, 20, 30, 40, 50];
arr.reverse(); 
console.log(arr);  // Output: [50, 40, 30, 20, 10]

//2. Reversing a String:
let str = "javascript";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);  // Output: "tpircsavaj"

//3. Reversing a Number:
let num = 12345;
let reversedNum = num.toString().split('').reverse().join('');
console.log(reversedNum);  // Output: 54321

//4. Reversing a Array:
const x= [1,2,3]
const y=x.reverse()
console.log(x===y) //Output:true

let a=[1,2,3];
let b=[1,2,3];
console.log(a === b); // Output: true


// Number: 121

// Step 1: Convert to String
// "121"

// Step 2: Split into Array
// ['1', '2', '1']

// Step 3: Reverse Array
// ['1', '2', '1']

// Step 4: Join Array into String
// "121"

// Step 5: Compare
// "121" === "121"  ➔ true


// Explanation:
// 1.number.toString() converts the number 121 to the string "121".
// 2.str.split('') splits the string "121" into an array of characters: ['1', '2', '1'].
// 3..reverse() reverses the array: ['1', '2', '1'].
// 4..join('') joins the reversed array back into a string: "121".

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // Output: [3, 2, 1]


//However, if you want to reverse a string, you can't directly use reverse() on it, 
//as strings are not arrays. To reverse a string, you would typically first convert it to an array of characters,
// then use the reverse() method, and finally join the array back into a string:
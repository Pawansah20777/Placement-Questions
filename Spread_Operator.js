let numbers = [2, 6, 1, 7, 9, 25, 2, 13];
let maxNum = Math.max(...numbers); // Passes the elements as separate arguments 
console.log(maxNum); // Output: 25

//Without ... Math.max(numbers) → Doesn't work because Math.max() expects individual numbers, not an array.
//With ...  Math.max(...numbers) → It becomes equivalent to Math.max(2, 6, 1, 7, 9, 25, 2, 13).

let originalArray = [1, 2, 3];
let copiedArray = [...originalArray]; // Creates a copy of the array
console.log(copiedArray); // Output: [1, 2, 3]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2]; // Merges two arrays
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

let str = "Hello";
let chars = [...str]; // Spreads the string into individual characters
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

let arr = [1, 2, 3];
console.log(arr); // 
console.log(... arr); // Output: 1 2 3


//Q.1 Convert a String into an Array of Characters
//You can use the spread operator to convert a string into an array of individual characters.
let string = "JavaScript";
let characters = [...string];
console.log(string);
console.log(...string)
console.log(characters); 
// Output: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


//Q.2. Merge Two Strings
//The spread operator can be used to merge two or more strings into a new string.
let str1 = "Hello";
let str2 = "World";
let mergedStr = [...str1, ...str2].join('');
console.log(mergedStr); // Output: "HelloWorld"

//Q.3. Remove Duplicate Characters in a String
//You can use the spread operator with a Set to remove duplicate characters from a string.
let str3 = "hello";
let uniqueChars = [...new Set(str3)].join('');
console.log(uniqueChars); // Output: "helo" 


// the new Set() is used to create a set, (new Set() writes together) 
//which automatically removes any duplicate characters from the string.


//Q.4. Reverse a String
let str4 = "OpenAI";
let reversedStr = [...str4].reverse().join('');
console.log(reversedStr); // Output: "IAnepO"

// //Q.4. Reverse a String
// let str4 = "OpenAI";
// let reversedStr = str4.split('').reverse().join('');
// console.log(reversedStr); // Output: "IAnepO"

//Q.4. Combine String and Array of Characters
let str5 = "Code";
let chars5 = ['r', 's'];
let combined = [...str5, ...chars5]
let combined1 = [...str5, ...chars5].join('');
console.log(combined); //Output: [ 'C', 'o', 'd', 'e', 'r', 's' ]
console.log(combined1); // Output: "Coders"

// const array1 = [1, 2];
// const array2 = [3, 4];
// const combinedArray = [...array1, ...array2];

// console.log(combinedArray); // Output: [1, 2, 3, 4]


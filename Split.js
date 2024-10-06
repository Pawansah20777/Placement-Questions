//split(): Convert a string into an array using a specified separator
//If you do not pass a separator to the split() method in JavaScript, 
//it will treat the entire string as a single element and return an array containing that string.

const str1 = 'apple,banana,orange';
const result1 = str1.split(',');  // Split by comma
console.log(result1);  
// Output: ["apple", "banana", "orange"]

const str2 = 'apple,banana,orange';
const result2 = str2.split('');   // Split every character
console.log(result2);  
// Output: ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ",", "o", "r", "a", "n", "g", "e"]

const str3 = 'apple,banana,orange';
const result3 = str3.split();   
console.log(result3);  
// Output: ["apple,banana,orange"]  (No split, returns the entire string as a single element in an array)

const str4 = 'apple,banana,orange';
const result4 = str4.split(' '); 
console.log(result4);  
// Output: ["apple,banana,orange"]  (No spaces in the string to split by, so no split occurs)

const sentence1 = 'Hello world JavaScript';
const result5 = sentence1.split(' ');  // Split by space
console.log(result5);  
// Output: ["Hello", "world", "JavaScript"]

const sentence2 = 'Hello world JavaScript';
const result6 = sentence2.split();  
console.log(result6);  
// Output: ["Hello world JavaScript"]  (No split, returns the entire string as a single element in an array)

const data = '2024-09-28';
const result7 = data.split('-');  // Split by hyphen
console.log(result7);  
// Output: ["2024", "09", "28"]

const text = 'hello';
const result8 = text.split('');  // Split every character
console.log(result8);  
// Output: ["h", "e", "l", "l", "o"]

const path = 'folder/subfolder/file.txt';
const result9 = path.split('/');  // Split by slash
console.log(result9);  
// Output: ["folder", "subfolder", "file.txt"]

const multiSpaceString = 'This is    a test';  // Multiple spaces
const result10 = multiSpaceString.split(' ');  
console.log(result10);  
// Output: ["This", "is", "", "", "", "a", "test"]  (Empty strings where there are multiple spaces)

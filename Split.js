//split(): Convert a string into an array using a specified separator
//If you do not pass a separator to the split() method in JavaScript, 
//it will treat the entire string as a single element and return an array containing that string.

// const str = 'apple,banana,orange';
// const result = str.split(',');  // Split by comma
// console.log(result);  

// const str = 'apple,banana,orange';
// const result = str.split('');   // Split every character
// console.log(result);  

// const str = 'apple,banana,orange';
// const result = str.split();   
// console.log(result);  

// const str = 'apple,banana,orange';
// const result = str.split(' '); 
// console.log(result);  

// const sentence = 'Hello world JavaScript';
// const result = sentence.split(' ');  // Split by space
// console.log(result);  

// const sentence = 'Hello world JavaScript';
// const result = sentence.split();  
// console.log(result); 

// const data = '2024-09-28';
// const result = data.split('-');  // Split by hyphen
// console.log(result);  

const text = 'hello';
const result = text.split('');  // Split every character
console.log(result); 

// const path = 'folder/subfolder/file.txt';
// const result = path.split('/');  // Split by slash
// console.log(result);  

// const multiSpaceString = 'This is    a test';  // Multiple spaces
// const result = multiSpaceString.split(' ');  
// console.log(result);  
//join(): Convert an array into a string with a specified separator
//If you remove the separator from join(), it defaults to using a comma (,) as the separator.

// Example 1
const fruits1 = ['apple', 'banana', 'orange'];
const result1 = fruits1.join(",");  
console.log(result1);  
// Output: "apple,banana,orange"

//=========================================================

// Example 2
const fruits2 = ['apple', 'banana', 'orange'];
const result2 = fruits2.join();  
console.log(result2);  
// Output: "apple,banana,orange"  (Default separator is a comma when no argument is provided)

//=========================================================

// Example 3
const words = ['hello', 'world', 'javascript'];
const result3 = words.join("-");  
console.log(result3);  
// Output: "hello-world-javascript"

//=========================================================

// Example 4
const numbers = [1, 2, 3, 4];
const result4 = numbers.join('');  // No separator
console.log(result4);  
// Output: "1234"  (All elements joined with no separator)

//=========================================================

// Example 5
const items = ['car', 'bike', 'boat'];
const result5 = items.join(' | ');  // Custom separator
console.log(result5);  
// Output: "car | bike | boat"


//==============================================================
// No separator: join('') – the elements are concatenated without any separator, like in numbers.join('') resulting in "1234".
// Default separator: join() – if no separator is provided, it defaults to a comma ,, like in fruits2.join() resulting in "apple,banana,orange".
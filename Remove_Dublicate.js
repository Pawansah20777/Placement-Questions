// function abc(str) {
//     return [... new Set(str)].join('');
//   }
  
//   const result = abc("aapawaan");
//   console.log(result); 

//=========================================================

//Process:
//new Set("aapawaan") ➔ { 'a', 'p', 'w', 'n' }
//[...new Set("aapawaan")] ➔ ['a', 'p', 'w', 'n']
//['a', 'p', 'w', 'n'].join('') ➔ "apwn"

//Set is a built-in JavaScript object that allows you to store unique values.
//Set automatically ignore duplicates, so only the first occurrence of each character is kept.
//So, [...new Set(str)] takes the set {'a', 'p', 'w', 'n'} and converts it into the array ['a', 'p', 'w', 'n'].
//The spread operator (...) takes each element of the Set and "spreads" them into a new array. This converts the set back into an array, so [...new Set(str)] results in ['a', 'p', 'w', 'n'].
//Therefore, ['a', 'p', 'w', 'n'].join('') results in the string "apwn".

//==============================================================

function abc() {
  // Convert string to Set to remove duplicates
  let set = new Set("hello"); // Set {'h', 'e', 'l', 'o'}
  
  // Convert Set to array using spread operator
  let array = [...set]; // Array ['h', 'e', 'l', 'o']
  
  // Join array elements into a single string
  return array.join(""); // String "helo"
}

let res = abc();
console.log(res); // Output: "helo"

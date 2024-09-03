function abc(str) {
    return [... new Set(str)].join('');
  }
  
  const result = abc("aapawaan");
  console.log(result); 

//Process:
//new Set("aapawaan") ➔ { 'a', 'p', 'w', 'n' }
//[...new Set("aapawaan")] ➔ ['a', 'p', 'w', 'n']
//['a', 'p', 'w', 'n'].join('') ➔ "apwn"

//Set is a built-in JavaScript object that allows you to store unique values.
//Set automatically ignore duplicates, so only the first occurrence of each character is kept.
//So, [...new Set(str)] takes the set {'a', 'p', 'w', 'n'} and converts it into the array ['a', 'p', 'w', 'n'].
//The spread operator (...) takes each element of the Set and "spreads" them into a new array. This converts the set back into an array, so [...new Set(str)] results in ['a', 'p', 'w', 'n'].
//Therefore, ['a', 'p', 'w', 'n'].join('') results in the string "apwn".
function isPalindrome(number) {
    const str = number.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 



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
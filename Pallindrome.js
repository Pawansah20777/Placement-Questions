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


// Explanation:
// 1.number.toString() converts the number 121 to the string "121".
// 2.str.split('') splits the string "121" into an array of characters: ['1', '2', '1'].
// 3..reverse() reverses the array: ['1', '2', '1'].
// 4..join('') joins the reversed array back into a string: "121".
function isNumberPalindrome(num) {
    let str = num.toString(); // str = "121"

    for (let i = 0; i < str.length / 2; i++) {

        if (str[i] !== str[str.length - 1 - i]) { 
            return false; 
        }
        
    }
    return true; 
}


console.log(isNumberPalindrome(12121))


const number = 12345;
const a = number.toString();  // "12345"
const b = a.split('');        // ['1', '2', '3', '4', '5']
const c = b.join('');         // "12345"

const a1 = 12345;
const reversed = a1.toString().split('').reverse().join('');
console.log(reversed); // Output: "54321" (as a string)
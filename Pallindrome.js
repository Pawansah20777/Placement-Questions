function isPalindrome(number) {
    const str = number.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 



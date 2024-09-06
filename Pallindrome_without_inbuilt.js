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

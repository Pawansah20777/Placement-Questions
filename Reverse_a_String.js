function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed= reversed+ str[i];
    }
    return reversed;
}

let a = "pawan hello";
let b = reverseString(a);
console.log(b); 


//================================
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("pawan hello")); // Output: "olleh nawap"
function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = n * (arr[0] + arr[arr.length-1]) / 2; 

    const actualSum = arr.reduce((sum, num) => 
                             sum + num
                            ); 
    
    return expectedSum - actualSum; 
}

const arr = [1,2,4,5]; 
const missingNumber = findMissingNumber(arr);
console.log("The missing number is:", missingNumber);

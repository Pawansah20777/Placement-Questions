function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // divisible by i, not prime
  }
  return true; // prime number
}

console.log(isPrime(11)); // true
console.log(isPrime(9)); // false

// let m = 7;
// let n = 7;

// for (let i = 1; i <= m; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || j == 1 || i == m || j == n) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log("");
// }

let m = 7;
let n = 7;

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == 1 || j == 1 || i == m || j == n || i == j || i + j == m + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log("");
}


//===============================================================
// let n = 5; // Number of rows for the pyramid

// for (let i = 1; i <= n; i++) {
//   // Print spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
  
//   // Print stars
//   for (let k = 1; k <= (2 * i - 1); k++) {
//     process.stdout.write("*");
//   }
  
//   // Move to the next line after each row
//   console.log("");
// }

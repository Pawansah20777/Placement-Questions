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

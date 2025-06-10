// function month(x){
//   switch(x){
//     case 1:return 'January';
//     case 2:return 'February';
//     case 3:return 'March';
//     case 4:return 'April';
//     case 5:return 'May';
//     case 6:return 'June';
//     case 7:return 'July';
//     case 8:return 'August';
//     case 9:return 'September';
//     case 10:return 'October';
//     case 11:return 'November';
//     case 12:return 'December';
//     default: return 'Invalid month';  // if x is out of range 1-12
//   }
// }

// console.log(month(1));

//============================================

const month = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

function getmonthName(a){
  return month[a]
}

console.log(getmonthName(1));   
console.log(month["1"]);       // prints January
console.log(getmonthName(1)); // also prints January (JS converts 1 → "1")
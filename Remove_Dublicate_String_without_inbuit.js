// let abc = (arr) => {
//     let a = [];
   
//     for (let i = 0; i < arr.length; i++) {
//        if (a.indexOf(arr[i]) === -1){  // -1 indicates that the element is not present in the array.
//            a.push(arr[i])
//          }
//     }
//     return a;
//   }
  
//   let arr=[1,6,2,2,3,6,4]
//   const result = abc(arr);
//   console.log(result);

//==========================================
  
let abc = (arr) => {
    let a = [];
    for (let element of arr) {
        if (!a.includes(element)) {
            a.push(element);
        }
    }
    return a;
}

const result = abc([1, 2, 2, 3, 4]);
console.log(result);

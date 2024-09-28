// function findDuplicates(arr) {

//    let b= arr.filter((item, index) =>{
//       return arr.indexOf(item) !== index
//     });
//     return b;
//   }
  
//   let arr=[1, 2, 3, 1, 2, 4]
//   console.log(findDuplicates(arr))
  
function removeDublicates(arr) {
  let b= arr.filter((item, index) =>{
     return arr.indexOf(item) == index
   });
   return b;
 }
 
 console.log(removeDublicates([1, 2, 3, 1, 2, 4]))
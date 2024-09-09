function findDuplicates(arr) {
   let b= arr.filter((item, index) =>{
      return arr.indexOf(item) !== index
    });
    return b;
  }
  
  console.log(findDuplicates([1, 2, 3, 1, 2, 4]))
  
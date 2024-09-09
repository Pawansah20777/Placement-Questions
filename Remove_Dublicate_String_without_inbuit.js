function abc(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {

      if (a.indexOf(arr[i]) === -1) {
           a.push(arr[i])
      }

    }
    return a;
  }
  
  const result = abc([1,2,2,3,4]);
  console.log(result);
  
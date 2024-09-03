function abc(str) {
    let a = '';
    for (let i = 0; i < str.length; i++) {

      if (a.indexOf(str[i]) === -1) {
           a=a+str[i];
      }

    }
    return a;
  }
  
  const result = abc("hello");
  console.log(result);
  
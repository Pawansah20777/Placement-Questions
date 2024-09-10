const findDublicates=(arr)=>{

     let b=arr.filter((item,index)=>{
        return arr.indexOf(item)===index;
       })
     return b;
    
}

let a= findDublicates([9,6,2,9,3,6]);
console.log(a);
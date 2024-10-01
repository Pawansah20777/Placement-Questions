//Find Dublicates
let a=[1,1,2,3,3,4,5,6,7,6];
let dublicates=a.filter((x,ind)=>{
     return a.indexOf(x) !== ind;
});
console.log(dublicates)

//Remove Dublicates
let a1=[1,1,2,3,3,4,5,6,7,6];
let remove=a1.filter((x,ind)=>{
     return a1.indexOf(x) == ind;
});
console.log(remove)
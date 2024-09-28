let a=0;
let b=1;

for (let i=1; i<=8; i++) {
    console.log(a);
   let temp=a;
   a=b;
   b=temp+b;
}
// let arr=[5,10,15,20,25]
// console.log(arr.reduce((a,b)=>a+b));
// console.log(arr.reduce((a,b)=>a>b? a:b));
// console.log(arr.reduce((a,b)=>a<b? a:b));

var arr=[
    [1,'manu',100],
    [2,'vinu',200],
    [3,'shibu',300],
    [4,'sanu',100],
    [5,'sachu',500] 
]
console.log(arr.reduce((a,b)=>a[2]<b[2]? a:b));
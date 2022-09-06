// var obj={foo:1};
// obj.bar=2;
// console.log(obj);

// function mystery(parem){
//     return parem;
// }
// let a=mystery(1,23,4);
let array=[1,3,4,2,7,9,10,6,8];
let arraya=[1,3,9,11,5,7,13];
let newArray=array.map(function(item){
return item%2!=0;
})
console.log(newArray);
let newArray1=arraya.map(function(items){
    return items%2!=0;
})
console.log(newArray1);
// let result="Hello"+5;
// console.log(result);

// console.log(result,typeof result);

// let strNumber="45.67";
// let num2=parseFloat(strNumber);
// console.log(num2, typeof num2);

// let num1=100;
// let str1=String(num1);
// console.log(str1, typeof str1);

// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// sum(10,20);


// function expression
 let add= function(a,b){
    return a+b;
 }

 console.log(add(90,8));

 // higher order function, calcualte is a higher order function
 function calculate(a,b,callback){
    return callback(a,b);

 }

 // here callback is callback function

 let sum=calculate(10,20,add);

 console.log(sum);

 let arr=[1,2,3,4,5,6];

//  let fun=(x)=>{
//     return x*2;
//  }

//  let result=arr.map(fun);
//  console.log(result);

let result=arr.map((x)=>{
    return x*2;
})

console.log(result);

let res=arr.filter((x)=>{
    return x%2==0;
})

console.log(res);

let arr1=["apple","mango","banana","apple","apple","Apple","Mango"];

let res1=arr1.filter((x)=>{
    let ele=x.toLowerCase();
    return !ele.includes("apple");
})

console.log(res1);

let ages=[50,70,24,16,15];

let adult=ages.filter((x)=>{
    return x>=18;
})

console.log(adult);

let fruits=["Apple","Mango","banana","Pineapple","kiwi"];

let ans=fruits.filter((x)=>{
    return x[0]=='A' || x[0]=='a';
})

let ans2=fruits.filter((x)=>{
return x.length>=5;
})

console.log(ans2);


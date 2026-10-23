// let a=8.9;
//  console.log(Math.ceil(a));
//  console.log(Math.floor(a));
//  console.log(Math.round(a));
//  console.log(Math.log(2,3));

// let b=Math.floor(Math.random()*100)+501;
// console.log(b);

// formula = (Math.random() * (max - min)) + min;
// random OTP

// function generateOTP(){

//   let num=Math.floor(Math.random()*(9999-1000)+1000);
//     console.log(num);
// }

// console.log(generateOTP());

// let arr=["hello","hi",10];

// console.log(arr);

// for(let x of arr){
//     console.log(arr[x]);
// }
const button = document.getElementById("gen-btn");
const h1 = document.querySelector(".show");

button.addEventListener("click" , function(){
    let color1="#";
    let hex="0123456789abcdef";
    
    
    for (let i = 0; i < 6; i++) {
        color1 += hex[Math.floor(Math.random() * 16)];
    }
    
    h1.style.color =  color1;
});



// function generateHexColor(){
//     let color="#";
//     let hex="0123456ABCDEF";


//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }

//     h1.style.color = color;
// }
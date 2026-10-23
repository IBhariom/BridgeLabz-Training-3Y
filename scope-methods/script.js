// let a=10;

// let b="10";

// console.log(a==b);
// console.log(a===b);

// // == check only value
// // === check both value and data type

// // String

// // let name="raj";
// // let age=10;

// console.log("My name is"+name+"and my age is"+age);

// //using string interpolation---> back tag
// let result=`My name is ${name} and my age is ${age}`;

// console.log(result);

// inbuilt methods of string

let name=" Hariom Verma ";
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf("i"));
console.log(name.includes("Verma"));
console.log(name.slice(2,5));
console.log(name.split(" "));
console.log(name.length);

let password="    dkfkdglldg2345  ";

// password=password.trim();

function checkPassword(password){
    password=password.trim();
    if(password.length<6){
        return false;
    }
    let upper=false;
    let lower=false;
    let special=false;
    let digit=false;
    for(let i=0;i<password.length;i++){
        let ch=password.charAt(i);
        if(ch>="A" && ch<="Z"){
            upper=true;
        }
        else if(ch>="a" && ch<="z"){
            lower="true";
        }
        else if(digit>="0" && digit<="9"){
            digit=true;
        }
        else{
            special=true;
        }
    }

    if(upper && lower && special && digit){
        return true;
    }
    // else{
    //     false;
    // }
    return false;

    // console.log(checkPassword("  abgcdg356Y"));
}

console.log(checkPassword(password));

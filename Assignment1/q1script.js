let userName = prompt("Enter your name:");
let currentHour = new Date().getHours();
let message;

if (currentHour < 12) {
    message = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    message = `Good Afternoon ${userName}!`;
} else {
    message = `Good Evening ${userName}!`;
}

document.getElementById("greeting").innerHTML = message;
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let valid = [
        /^[A-Za-z]+$/.test(name.value),
        /^[\w.-]+@[\w.-]+\.\w+$/.test(email.value),
        /^\d{10}$/.test(phone.value),
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/.test(password.value)
    ];

    let inputs = [name, email, phone, password];

    inputs.forEach((input, i) => {
        input.style.border = valid[i] ? "2px solid green" : "2px solid red";
    });

    alert(valid.every(Boolean) ? "Valid Form!" : "Invalid Details!");
});


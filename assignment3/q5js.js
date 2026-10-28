document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    let nameRegex = /^[A-Za-z]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameRegex.test(name) && emailRegex.test(email) && seats >= 1 && seats <= 10 && Number.isInteger(seats)) {

        let booking = { name, email, seats };

        document.getElementById("result").innerHTML =
            `Booking Successful!<br>
             Name: ${booking.name}<br>
             Email: ${booking.email}<br>
             Seats: ${booking.seats}`;

        console.log(booking);

    } else {
        document.getElementById("result").innerHTML =
            "Invalid details! Please check your inputs.";
    }
});




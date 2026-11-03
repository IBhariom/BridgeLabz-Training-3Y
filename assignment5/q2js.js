let text = document.querySelector("#text");
let counter = document.querySelector("#counter");
let reset = document.querySelector("#reset");

let max = 100;

text.addEventListener("keydown", function(e) {

    if (text.value.length >= max) {
        if (e.key.length === 1) {
            e.preventDefault();
        }
    }

});

text.addEventListener("input", function() {

    let remaining = max - text.value.length;

    counter.textContent = remaining;

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    }
    else if (remaining === 0) {
        counter.style.color = "red";
    }
    else {
        counter.style.color = "green";
    }

});

reset.addEventListener("click", function() {

    text.value = "";
    counter.textContent = max;
    counter.style.color = "green";

});
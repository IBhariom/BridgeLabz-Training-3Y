let currentStep = 1;

let next = document.querySelector("#next");
let back = document.querySelector("#back");

function showStep() {
    for (let i = 1; i <= 3; i++) {
        document.querySelector("#step" + i).style.display =
            (i === currentStep) ? "block" : "none";
    }

    back.style.display = currentStep === 1 ? "none" : "inline";
    next.textContent = currentStep === 3 ? "Submit" : "Next";
}

next.addEventListener("click", function () {

    let input = document.querySelector("#step" + currentStep + " input");

    if (!input.value.trim()) {
        alert("Please fill the field");
        return;
    }

    if (currentStep === 2 && !input.checkValidity()) {
        alert("Enter valid email");
        return;
    }

    if (currentStep === 3) {
        showSummary();
        return;
    }

    currentStep++;
    showStep();
});

back.addEventListener("click", function () {
    currentStep--;
    showStep();
});

function showSummary() {

    document.querySelector("#step3").style.display = "none";
    back.style.display = "none";
    next.style.display = "none";

    document.querySelector("#summary").innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p>Name: ${document.querySelector("#name").value}</p>
        <p>Email: ${document.querySelector("#email").value}</p>
        <p>Password: ${document.querySelector("#password").value}</p>
    `;
}

showStep();
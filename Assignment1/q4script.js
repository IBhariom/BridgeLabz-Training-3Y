

let marks = [];

for (let i = 1; i <= 5; i++) {
    let mark = Number(prompt("Enter marks for subject " + i + " (0-100):"));

    if (mark < 0 || mark > 100 || !Number.isFinite(mark)) {
        alert("Invalid marks! Please enter marks between 0 and 100.");
        i--;
        continue;
    }

    marks.push(mark);
}

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;
let percentage = (total / 500) * 100;


let failed = marks.some(mark => mark < 35);


let result;

if (failed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85 && !failed) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

document.body.innerHTML += `
    <h2>Result</h2>
    <p>Marks: ${marks.join(", ")}</p>
    <p>Total Marks: ${total}/500</p>
    <p>Average: ${average.toFixed(2)}</p>
    <p>Overall Percentage: ${percentage.toFixed(2)}%</p>
    <h3>Status: ${result}</h3>
`;


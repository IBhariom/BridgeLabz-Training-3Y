
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

let validNumbers = [];
let invalidNumbers = [];

console.log("API DATA REPORT");

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log(`\nOriginal Value: ${str}`);
    console.log(`Number: ${num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String: "${str}"`);

    if (
        Number.isNaN(num) ||
        (typeof value === "string" && value.trim() === "")
    ) {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number".toUpperCase());
    } else {
        validNumbers.push(num);
        console.log("Status: Valid Number".toUpperCase());
    }
}

console.log("\n========== FINAL REPORT ==========");

console.log("\nValid Numeric Data:");
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`${i + 1}. ${validNumbers[i]}`);
}

console.log("\nInvalid Data:");
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`${i + 1}. ${String(invalidNumbers[i])}`);
}

console.log("\nTotal Valid Values:", validNumbers.length);
console.log("Total Invalid Values:", invalidNumbers.length);


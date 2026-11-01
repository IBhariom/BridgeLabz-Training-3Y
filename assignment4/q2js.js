function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function doubleNumbers() {
    let arr = [1, 2, 3, 4];

    let result = applyOperation(arr, double);

    console.log("Doubled Numbers:", result);
}

function squareNumbers() {
    let arr = [1, 2, 3, 4];

    let result = applyOperation(arr, square);

    console.log("Squared Numbers:", result);
}
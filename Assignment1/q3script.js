
let expenses = [5000, 2000, 8000, 1500, 1000];

function calculateExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense;
    }

    let average = total / expenses.length;

    let tax = total * 0.10;
    let finalAmount = total;
    finalAmount += tax;
 document.getElementById("result").innerHTML =
        "Total Expenses: ₹" + total.toFixed(2) + "<br>" +
        "Average Expense: ₹" + average.toFixed(2) + "<br>" +
        "Tax (10%): ₹" + tax.toFixed(2) + "<br>" +
        "Final Amount: ₹" + finalAmount.toFixed(2);
}


"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {

    const transaction = transactions[i];

    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_PROPERTY");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);

        console.log(`Transaction ${transaction.id}: VALID`);

    } catch (error) {

        let errorType = error.message;

        invalid.push({
            transaction: transaction,
            error: errorType
        });

        console.log(`Transaction at index ${i}: INVALID - ${errorType}`);
    }
}

// Final Report
console.log("\n========== TRANSACTION REPORT ==========");

console.log("\nValid Transactions:");
for (let i = 0; i < valid.length; i++) {
    console.log(valid[i]);
}

console.log("\nInvalid Transactions:");
for (let i = 0; i < invalid.length; i++) {
    console.log(invalid[i]);
}

console.log("\n SUMMARY ");
console.log(`Total Transactions: ${transactions.length}`);
console.log(`Successful Transactions: ${valid.length}`);
console.log(`Failed Transactions: ${invalid.length}`);


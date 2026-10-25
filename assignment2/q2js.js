"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let i = 0; i < employees.length; i++) {

        const emp = employees[i];

        if (
            !emp ||
            typeof emp.name !== "string" ||
            emp.salary === undefined ||
            emp.years === undefined
        ) {
            throw new Error("Missing employee property at index " + i);
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years for " + emp.name);
        }

        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        const totalSalary = salary + bonus;
        console.log(`Employee Name: ${emp.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);
    }

} catch (error) {
    console.error(`Error: ${error.message}`);
}


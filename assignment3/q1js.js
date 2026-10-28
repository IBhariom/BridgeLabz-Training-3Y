
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

   t
    applyDiscount(discount) {
        this.price = this.price - (this.price * discount / 100);
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price} | Category: ${this.category}`;
    }
}

const p1 = new Product(1, "Laptop", 50000, "Electronics");
const p2 = new Product(2, "Mouse", 500, "Accessories");
const p3 = new Product(3, "Keyboard", 1500, "Accessories");
const p4 = new Product(4, "Monitor", 12000, "Electronics");

p1.applyDiscount(10);

const products = [p1, p2, p3, p4];

const allProducts = document.getElementById("all-products");

products.forEach(product => {
    const p = document.createElement("p");
    p.textContent = product.displayDetails();
    allProducts.appendChild(p);
});

const filteredProducts = products.filter(product => product.price > 1000);

const filteredContainer = document.getElementById("filtered-products");

filteredProducts.forEach(product => {
    const p = document.createElement("p");
    p.textContent = product.displayDetails();
    filteredContainer.appendChild(p);
});

console.log("All Products:", products);
console.log("Products with price > ₹1000:", filteredProducts);


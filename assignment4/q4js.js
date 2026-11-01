function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("BMW", "X5");

function showCars() {

    console.log("Car 1 Details:");
    car1.getDetails();

    console.log("Car 2 Details:");
    car2.getDetails();

    console.log(car1.getDetails === car2.getDetails);
}
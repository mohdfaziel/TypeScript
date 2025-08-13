"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    printDetails() {
        console.log(`${this.name} has a price of ${this.price}`);
    }
}
class Mobile extends Product {
    constructor(name, price, model) {
        super(name, price);
        this.model = model;
    }
    getDiscount(discount) {
        let discountVal = (this.price * discount / 100);
        console.log(`You will get discount of: ${discountVal} rupees`);
    }
}
let m1 = new Mobile("iphone", 100000, "2025");
m1.getDiscount(12);
m1.printDetails();

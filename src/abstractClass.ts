abstract class Product{
    constructor(public name: string, public price: number) {}
    abstract getDiscount(discount:number):void;
    printDetails()
    {
        console.log(`${this.name} has a price of ${this.price}`);
    }
}

class Mobile extends Product
{
    constructor(name:string,price:number,public model:string)
    {
        super(name,price);
    }
    getDiscount(discount: number): void {
        let discountVal = (this.price * discount/100);
        console.log(`You will get discount of: ${discountVal} rupees`); 
    }
}

let m1 = new Mobile("iphone",100000,"2025");
m1.getDiscount(12);
m1.printDetails();
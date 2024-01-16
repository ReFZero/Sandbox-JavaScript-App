class Product {
  static count = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.count++;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed()}`); // toFixed(ileMiejscPoPrzecinku)
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }

  static getCount() {
    return Product.count;
  }

}
const salesTax = 0.23;

console.log(Product.getCount());
const product1 = new Product("Phone", 1000);
const product2 = new Product("Tablet", 500);

product1.displayProduct();
product2.displayProduct();
console.log(Product.getCount());

const total = product1.calculateTotal(salesTax);
console.log(`Total (with tax): $${total}`);

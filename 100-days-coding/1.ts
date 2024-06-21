// CLASS TYPE ANNOTATIONS

class Product {
    // Property type annotations 
    id: number;
    name: string;
    price: number;

constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
}

// method type annotations
getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

// create an instance of the product class
const product1 = new Product(1, "Widget", 20.0);

// access class properties and call a method
console.log(product1.getProductInfo());
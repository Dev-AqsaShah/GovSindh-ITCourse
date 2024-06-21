// CLASS TYPE ANNOTATIONS
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // method type annotations
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
// create an instance of the product class
var product1 = new Product(1, "Widget", 20.0);
// access class properties and call a method
console.log(product1.getProductInfo());

// generics and interfaces
// generics class collection
var collection = /** @class */ (function () {
    function collection() {
        this.data = [];
    }
    // Method to add an item of type 'T' to the collection
    collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return collection;
}());
// Creating an instance of collection with type parameter book
var itemOne = new collection();
itemOne.add({ itemType: "Book", title: "Atmic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// creating an instance of collection with type parameter "game"
var itemTwo = new collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);

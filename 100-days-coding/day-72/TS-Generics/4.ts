// generics and interfaces

// interfcedefinitions for book and game 
interface Book {
    itemType: string;
    title: string;
    isbn: number;

}

// interface definitions for Book and game

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// generics class collection
class collection<T> {
    public data: T[] = [];

    // Method to add an item of type 'T' to the collection
    add(item: T): void {
        this.data.push(item);
    }
}

// Creating an instance of collection with type parameter book
let itemOne = new collection<Book>();
itemOne.add({ itemType: "Book",title: "Atmic Habits", isbn: 150510});
itemOne.add({ itemType: "Book",title: "Follow Your Heart", isbn: 650650});
console.log(itemOne);

// creating an instance of collection with type parameter "game"
let itemTwo = new collection<Game>();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
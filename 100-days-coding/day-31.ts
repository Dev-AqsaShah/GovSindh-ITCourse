//question num-91 

let favoriteFruits: string[] =["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");

console.log(favoriteFruits);

//Question num-92 

function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}

const fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log(removeLastElement(fruits));

console.log(fruits);

//question num-93 

function replaceBananaWithMango(fruits:string[]): void {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}

 const fruits: string[] = ["Apple", "Banana", "Cherry"];
 replacementBananaWithMango(fruits);
 
  console.log(fruits);


function makeShirt(size: string = "large", text: string = 'I love typescript'): void {
    console.log(`you have ordered a ${size} shirt that says ${text}`);
}

makeShirt();
makeShirt('medium');
makeShirt('small', 'I need a big shirt to wear');

function sandwich(...items: string[]):void {
    console.log("sandwich order:")

    for (let i = 0; i < items.length; i++){
         console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich aqsa")

sandwich('chicken', 'cheese', 'tomato')
sandwich('beef', 'cheese')
sandwich('mayo suce','chicken')
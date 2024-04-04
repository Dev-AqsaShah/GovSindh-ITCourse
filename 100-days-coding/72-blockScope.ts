{
    let blockLet = "visible inside the bloc";
    const blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}

try{
    console.log(blockLet);
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.")
}

try {
    console.log (blockConst);
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
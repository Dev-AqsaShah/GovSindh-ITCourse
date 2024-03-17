let pricesSetl = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSetl, ...pricesSet2] .sort((a,b) => a - b);
console.log(combinedPrices)
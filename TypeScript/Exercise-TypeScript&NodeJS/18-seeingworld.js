var favplaces = ["Switzerland", "America", "china", "canada", "pakistan", "japan"];
console.log("original order:", favplaces);
console.log("Alphabetical order:", favplaces.sort());
console.log("original order after sorting:", favplaces);
console.log("Reverse alphabetical order:", favplaces.sort().reverse());
console.log("original order after reverse sorting:", favplaces);
favplaces.reverse();
console.log("reversed order:", favplaces);
favplaces.reverse();
console.log("back to original order:", favplaces);
favplaces.sort();
console.log("sorted in alphabetical order:", favplaces);
favplaces.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order", favplaces);

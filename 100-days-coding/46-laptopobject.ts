let laptop = {
 make: "Dell",
 model: "XPS 15",
 year: "2021",
describe: function() {
    console.log(`This laptop is a ${this.make} ${this.year} ${this.model}.`);
}
};
laptop.describe();
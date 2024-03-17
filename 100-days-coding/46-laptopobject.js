var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: "2021",
    describe: function () {
        console.log("This laptop i a ".concat(this.make, " ").concat(this.year, " ").concat(this.model, "."));
    }
};
laptop.describe();

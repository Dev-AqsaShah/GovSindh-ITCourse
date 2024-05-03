//question-num-127

const traditionalFunction = function (a, b) {
    return a + b;
};

const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));

//question-num-128

const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4));

//question-num-129
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.vallue);
    },
    arrowFunction: () => {
        console.log("arrow function:", this.vlue);
    },
};

traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
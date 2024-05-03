//question-num-127
var _this = this;
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));
//question-num-128
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4));
//question-num-129
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.vallue);
    },
    arrowFunction: function () {
        console.log("arrow function:", _this.vlue);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();

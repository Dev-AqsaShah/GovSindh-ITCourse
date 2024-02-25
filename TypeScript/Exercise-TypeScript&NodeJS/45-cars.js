var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "civic", { color: "silver", year: "2024" });
console.log(mycar);

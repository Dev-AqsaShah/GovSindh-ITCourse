// making a list (enum) for different type of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// showing one type of vehicle from the list
console.log(VehicleType.Car);
; // it shows 0 because enum start counting from 0 
// here, we're jut checking what number the car category got in our list.

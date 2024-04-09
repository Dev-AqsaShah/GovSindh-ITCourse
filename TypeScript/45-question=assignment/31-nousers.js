var users = ["admin", "aqsa", "marvi", "alixe"];
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("hello admin, would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(user, ", thank you for logging again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}

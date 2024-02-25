var current_users = ["aqsa", "marvi", "nida", "alixe"];
var new_users = ["aqsa", "nida", "hira", "arish"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_user, ", that name s taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still in avaliable list"));
    }
}

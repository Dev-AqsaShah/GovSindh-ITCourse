var guest_list = ['aisha', 'aqsa', 'aira'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('dear friend ' + guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
}
var absent = 'aqsa';
var new_guest = 'marvi';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('dear friend ' + guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
}
console.log("ms. ".concat(absent, " will not coming tomorrow dinner."));

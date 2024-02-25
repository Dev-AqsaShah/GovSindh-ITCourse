let guest_list : string [] = ['aisha', 'aqsa', 'aira'];
for(let i=0; i<guest_list.length; i++){
    console.log('dear friend ' +guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
}
let absent :string ='aqsa';
let new_guest : string = 'marvi';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('dear friend ' +guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
}
console.log (`ms. ${absent} will not coming tomorrow dinner.`)
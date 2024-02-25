let guest_list : string [] = ['aisha', 'aqsa', 'aira'];
// for(let i=0; i<guest_list.length; i++){
   let absent :string ='aqsa';
let new_guest : string = 'marvi';
 guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('dear friend ' +guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
// }
 guest_list.unshift('alixe','hira','arish');

// for(let i=0; i<guest_list.length; i++){
 //console.log('dear friend ' +guest_list[i] + ',\n I want to invite you with the bottom of my heart .\nthank you.\n');
//}
console.log("\nUnfortunately we can not arrange big table, so you are no longer invited");
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry friends.${remove_guest}you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
 console.log('dear friend ' +guest_list[i] + ',\n yes you are invited on tomorrow dinner\nthank you.\n');
}
guest_list.splice(0,2)
console.log(guest_list)
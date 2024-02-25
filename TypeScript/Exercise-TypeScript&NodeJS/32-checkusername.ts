let current_users : string [] = ["aqsa", "marvi", "nida", "alixe"]
let new_users : string [] = ["aqsa", "nida", "hira", "arish"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())


for(let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name s taken`)
    } else {
        console.log(`yes ${new_user}, is still in avaliable list`)
    }
}
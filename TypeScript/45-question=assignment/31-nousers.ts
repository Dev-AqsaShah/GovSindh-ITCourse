let users : string [] = ["admin", "aqsa", "marvi", "alixe"]

if (users.length ===0) {
    console.log ("we need to find some users!")
} else {
    for (let user of users) {
        if ( user === "admin") {
            console.log("hello admin, would you like to see a status report?")
        } else {
            console.log (`hello ${user}, thank you for logging again`)
        }
    }
}

 users = []
 if (users.length === 0) {
     console.log("we need to find some users!")
 }
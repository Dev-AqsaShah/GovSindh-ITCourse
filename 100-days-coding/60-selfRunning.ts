//this profile sets itself up and can share info about the user 
let userProfile = (function() {
    // the user's details are kept inside 
    let name = "john";
    let age = 30;

    //this part shares the users details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user 
userProfile.displayInfo(); 
// it says the user's name and age 


//we made a self-setup profile that can talk about the user.
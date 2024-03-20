"use strict";
let current_userName = ["Ali", "Atiq", "uMer", "USman", "Jhon"];
let new_user = ["Bilal", "hasan", "Ali", "hamza", "jhon"];
new_user.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    let current_userName = ["Ali", "Atiq", "uMer", "USman", "Jhon"];
    if (current_userName.map(c_user => c_user.toLocaleLowerCase().includes(lowercase))) {
        console.log("");
    }
});

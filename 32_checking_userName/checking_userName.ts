let current_userName : string [] = ["Ali" , "Atiq" , "uMer", "USman", "Jhon"];

let new_user: string [] = ["Bilal" , "hasan", "Ali", "hamza", "jhon"];

new_user.forEach(newUsername => {
     let lowercase : string = newUsername.toLowerCase();

let current_userName : string [] = ["Ali" , "Atiq" , "uMer", "USman", "Jhon"];
     if(current_userName.map(c_user => c_user.toLocaleLowerCase().includes(lowercase))){
        console.log("" )
     }
    })


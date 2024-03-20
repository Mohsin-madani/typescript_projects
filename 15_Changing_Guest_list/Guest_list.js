"use strict";
let Guest_list = ['Mohsin', 'Atiq', 'Umer'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n');
}
let absent_Guest = 'Atiq';
let new_Guest = 'Danish';
Guest_list[1] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n');
}
console.log(`Mr. ${absent_Guest} is not comming in to the party.`);

let Guest_list : string[] = ['Mohsin', 'Atiq', 'Umer'];

let absent_Guest: string = 'Atiq' ;

let new_Guest: string = 'Muneeb' ;

for (let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' +Guest_list [i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n')
    }

Guest_list[1] = new_Guest;

console.log(`Mr. ${absent_Guest} is not comming in to the party.`);

console.log("Good news! We find Big Table so we are inviting 3 more guests.")

Guest_list.unshift('Adil ameer');

Guest_list.splice(2 , 0 , 'Daniyal nagori');

Guest_list.push('Danish');

for (let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' +Guest_list [i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n')
    }
    
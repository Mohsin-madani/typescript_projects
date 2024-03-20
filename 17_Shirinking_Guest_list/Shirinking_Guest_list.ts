let Guest_list : string[] = ['Mohsin', 'Atiq', 'Umer'];
let absent_Guest: string = 'Atiq' ;
let new_Guest: string = 'Muneeb' ;

// for (let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' +Guest_list [i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n')
//     }


Guest_list[1] = new_Guest;
console.log(`Mr. ${absent_Guest} is not comming in to the party.`);
console.log("Good news! We find Big Table so we are inviting 3 more guests.")

// yahan Array men 3 guest add kiye hain.

Guest_list.unshift('Adil ameer');
Guest_list.splice(2 , 0 , 'Daniyal nagori');
Guest_list.push('Danish');

// yahan par 6 guest k array ko print karwaya hai.

for (let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' +Guest_list [i] + ', \n\n it is my pleasure to invite you in our party.\n\n Thank you!\n\n')
    }

 // Sorry massage to guest for not inviting. 
    
    console.log('\nSorry we can not arrange big Table, so only two peoples wiil be invited.');

// yahan par mene guest remove kiye hain.

    while(Guest_list.length >2){
       let remove_Guest= Guest_list.pop();
       console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
    }

// bachy huy 2 invited Guest.

    for (let i=0; i<Guest_list.length; i++){
        console.log('Dear Mr. ' + Guest_list [i] + ', \n\n you are still invited.\n\n Thank you!\n\n')
        }

// Sary guests Array sy remove kr diye.
    
Guest_list.splice(0, 2);
console.log(Guest_list);
let number : number [] = [1,2,3,4,5,6,7,8];

for(let num of number){
    let ordinalEnding: string;

    if (num === 1){
        ordinalEnding = "st";
    }

    else if (num === 2){
        ordinalEnding = "nd";
    }

    else if (num === 3){
        ordinalEnding = "rd"
    }

    else if (num === 4){
        ordinalEnding = "th";
    }

    else if (num === 4){
        ordinalEnding = "th"
    }
     
    else{
        ordinalEnding = "th"
    }
    console.log(`${num} ${ordinalEnding}`);
}
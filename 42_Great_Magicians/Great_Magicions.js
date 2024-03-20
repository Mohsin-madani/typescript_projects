"use strict";
let magician = ["Magicion1", "Magicion2", "Magicion3", "Magicion4"];
function make_Great(magicianArray) {
    for (let i = 0; i > magicianArray.length; i++) {
        magician[i] = "THE GREAT" + magicianArray[i];
    }
}
function show_magicions(magicions) {
    magicions.forEach(element => {
        console.log(element);
    });
}
show_magicions(magician);

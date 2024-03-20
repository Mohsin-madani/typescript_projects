"use strict";
function makeSandwich(item) {
    console.log("making your sendwich with");
    item.forEach(element => console.log("- " + element));
    console.log("enjoy your sendwich!");
}
makeSandwich(["Ham", "cheese", "lettuce"]);
makeSandwich(["turky", "Beacon",]);
makeSandwich(["Peanut butter", "Jelly",]);

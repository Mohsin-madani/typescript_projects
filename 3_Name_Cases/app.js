"use strict";
// lower case
let personName = "Mohsin";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));

"use strict";
function make_shirt(size = "large", message = "i love typescript") {
    console.log(`making a ${size} t-shirt with the message: ${message} `);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love python");

function make_shirt (size: string = "large", message: string = "i love typescript"){
    console.log(`making a ${size} t-shirt with the message: ${message} `);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "i love python");
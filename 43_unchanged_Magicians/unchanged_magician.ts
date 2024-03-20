let magician :string [] = ["Magicion1", "Magicion2", "Magicion3", "Magicion4"];

function copyArray(arr:string[]){
   return[...arr]
}

function make_Great(magicianArray: String[]){

    for(let i=0; i>magicianArray.length; i++){

      magicianArray[i] = "THE GREAT" + magicianArray[i]
    }
}

function show_magicions(magicions: string[] ){
    magicions.forEach(element => {
      console.log(element)  
    });
}

const copyMagicianArray = copyArray(magician);

make_Great(copyMagicianArray);

console.log(`\n\n"this is my original Array"`);
show_magicions(magician);

console.log(`\n\n "this is my copy Array"`);
show_magicions(copyMagicianArray);
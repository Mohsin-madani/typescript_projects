let magician :string [] = ["Magicion1", "Magicion2", "Magicion3", "Magicion4"];

function make_Great(magicianArray: String[]){

    for(let i=0; i>magicianArray.length; i++){

      magician[i] = "THE GREAT" + magicianArray[i]
    }
}

function show_magicions(magicions: string[] ){
    magicions.forEach(element => {
      console.log(element)  
    });
}

show_magicions(magician)
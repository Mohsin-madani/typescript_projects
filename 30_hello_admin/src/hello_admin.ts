let userNames: string[] = ["admin","ali","ahmed","hamid","mk_khan"];

for(let i =0; i<userNames.length;i++){
    if(userNames[i] === "admin"){
        console.log("hello admin would you like to see a status report");
    }

    else{
        console.log(`Hello ${userNames[i]}, thank you for loggin in again`)
    }
}


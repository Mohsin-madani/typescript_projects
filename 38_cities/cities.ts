
function describe_city (city: string,  country: string = "Deafault Contry"){
    console.log(` ${city} is in ${country}`);
}

describe_city("karachi", "pakistan");

describe_city("tokyo", "japan");

describe_city("Pairis");
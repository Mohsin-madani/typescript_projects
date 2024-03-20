import { features } from "process";

function carInformation (manufactruer:string, modleName:string,...extraOptions:{[key : string]: any} [])
:object
{

    const carInfo = {
        manufactruer,
        modleName,
        ...Object.assign({}, ...extraOptions)
    }

    return carInfo;
};

let answer = carInformation("honda", "civic", {color: "black"}, {features: ["navigation", "power window"]});

console.log(answer);


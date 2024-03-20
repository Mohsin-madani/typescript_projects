function carInformation(manufactruer, modleName, ...extraOptions) {
    const carInfo = {
        manufactruer,
        modleName,
        ...Object.assign({}, ...extraOptions)
    };
    return carInfo;
}
;
let answer = carInformation("honda", "civic", { color: "black" }, { features: ["navigation", "power window"] });
console.log(answer);
export {};

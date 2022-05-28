let clTemp = document.querySelector(".aTemp").textContent;
console.log(clTemp)
let cSpeed = document.querySelector(".wSpeed").textContent;
console.log(cSpeed)

let cTemp =  (clTemp * (9 / 5)) + 32 ;

console.log(cTemp)

if(cTemp <= 50 && cSpeed > 3.0) {
    let wChill = 35.74 + (0.6215 * (cTemp)) - (35.75 * (Math.pow(cSpeed, 0.16))) + (0.425 *(cTemp * (Math.pow(cSpeed, 0.16))));
    console.log(wChill);
    document.querySelector(".wChill").textContent = Math.round((wChill + Number.EPSILON) * 100) / 100;
} else {
    document.querySelector(".wChill").textContent = "N/A";
} 
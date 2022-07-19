const requestURL = "https://adonisaeron.github.io/wdd230/InnNSuites/temples.json";
const container = document.querySelector(".content");

fetch(requestURL)
    .then(function (respone) {
        return respone.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['Temples'];
        temples.forEach(displayTemples);
    });

displayTemples(temples) {
    let card = document.createElement('div');
    let img = document.createElement("img");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let sessions = document.createElement("p");
    let historyL = document.createElement("ul");
    let closure = document.createElement("ul");
    let newLi = document.createElement("li")

    img.setAttribute('src', temples.photo);
    img.setAttribute('alt', `Temple at ${temples.address}`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("tImg");

    pNum.textContent = temples.telephone;
    Addr.textContent = temples.address;
    sessions.textContent = temples.session;

    temples.history.forEach(history => {
        newLi.textContent = history
        historyL.appendChild(newLi)
    });

    temples.closure.forEach(history => {
        newLi.textContent = `${history.key}`
        historyL.appendChild(newLi)
    });

};
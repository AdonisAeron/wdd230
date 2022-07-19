const requestURL = "https://adonisaeron.github.io/wdd230/InnNSuites/temples.json";
const container = document.querySelector(".content");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['Temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temples) {
    let card = document.createElement('div');
    let img = document.createElement("img");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let sessions = document.createElement("p");
    let service = document.createElement("p");
    let history = document.createElement("p");

    img.setAttribute('src', temples.photo);
    img.setAttribute('alt', `Temple at ${temples.address}`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("tImg");

    pNum.textContent = `Phone Number: ${temples.telephone}`;
    Addr.textContent = `Address: ${temples.address}`;
    sessions.textContent = `Active Sessions: ${temples.session}`;
    history.innerHTML = temples.history;
    service.textContent = `Active Services: ${temples.services}`;

    card.appendChild(img);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(sessions);
    card.appendChild(service);
    card.appendChild(history);

    card.classList.add("templeDiv")
    card.classList.add(`div${temples.session}`)

    container.appendChild(card);

};
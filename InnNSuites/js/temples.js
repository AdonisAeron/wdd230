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

function likeCard(event) {
    if (event.currentTarget.className == ".btn2") {
        document.querySelector(".div2").classList.add("liked")
        document.querySelector(".div4").classList.remove("liked")
        document.querySelector(".div6").classList.remove("liked")
        document.querySelector(".div10").classList.remove("liked")
        localStorage.setItem("likedCard", ".div2")
    } else if (event.currentTarget.className == ".btn4") {
        document.querySelector(".div2").classList.remove("liked")
        document.querySelector(".div4").classList.add("liked")
        document.querySelector(".div6").classList.remove("liked")
        document.querySelector(".div10").classList.remove("liked")
        localStorage.setItem("likedCard", ".div4")
    } else if (event.currentTarget.className == ".btn6") {
        document.querySelector(".div2").classList.remove("liked")
        document.querySelector(".div4").classList.remove("liked")
        document.querySelector(".div6").classList.add("liked")
        document.querySelector(".div10").classList.remove("liked")
        localStorage.setItem("likedCard", ".div6")
    } else if (event.currentTarget.className == ".btn10") {
        document.querySelector(".div2").classList.remove("liked")
        document.querySelector(".div4").classList.remove("liked")
        document.querySelector(".div6").classList.remove("liked")
        document.querySelector(".div10").classList.add("liked")
        localStorage.setItem("likedCard", ".div10")
    }
}

function displayTemples(temples) {
    let card = document.createElement('div');
    let img = document.createElement("img");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let sessions = document.createElement("p");
    let service = document.createElement("p");
    let history = document.createElement("p");
    let like = document.createElement("button");

    img.setAttribute('src', temples.photo);
    img.setAttribute('alt', `Temple at ${temples.address}`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("tImg");

    pNum.textContent = `Phone Number: ${temples.telephone}`;
    Addr.textContent = `Address: ${temples.address}`;
    sessions.textContent = `Active Sessions: ${temples.session}`;
    history.innerHTML = temples.history;
    service.innerHTML = `Active Services: ${temples.services}`;
    like.textContent = "like";
    like.classList.add(`.btn${temples.session}`);
    like.addEventListener('click', likeCard);

    card.appendChild(img);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(sessions);
    card.appendChild(service);
    card.appendChild(history);
    card.appendChild(like);

    card.classList.add("templeDiv");
    card.classList.add(`div${temples.session}`);

    if (localStorage.getItem("likedCard") == `.div${temples.session}`) {
        card.classList.add("liked")
    }

    container.appendChild(card);

};


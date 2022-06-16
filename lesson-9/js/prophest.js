const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {  
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    p1.textContent = `Date of Birth: ${prophet.birthdate}`
    p2.textContent = `Place of Birth: ${prophet.birthplace}`
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    document.querySelector('div.grid').appendChild(card);
}
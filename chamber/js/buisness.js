const requestURL = "https://adonisaeron.github.io/wdd230/chamber/data.json";
const busi = document.querySelector(".buisnesses");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['Businesses'];
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let name = document.createElement("h1");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let website = document.createElement("a");

    img.setAttribute('src', business.imageurl);
    img.setAttribute('alt', `${business.name} Logo`);
    img.setAttribute('loading', 'lazy');

    name.textContent = business.name;
    Addr.textContent = business.address;
    pNum.textContent = business.pNumber;
    website.textContent = business.website;

    if(business.website == "N/A") {
        business.website = "https://www.mcdonalds.com/us/en-us.html";
    };

    website.setAttribute('href', business.website);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(website);

    document.querySelector("div.buisnesses").appendChild(card);
};
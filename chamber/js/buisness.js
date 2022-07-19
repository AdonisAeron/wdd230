const requestURL = "https://adonisaeron.github.io/wdd230/chamber/data.json";
const busi = document.querySelector(".buisnesses");
const gBtn = document.querySelector(".gBtn");
const lBtn = document.querySelector(".lBtn");

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
    img.classList.add("bImg");

    name.textContent = business.name;
    name.classList.add("bName");
    Addr.textContent = business.address;
    Addr.classList.add("bAddr");
    pNum.textContent = business.pNumber;
    pNum.classList.add("bNum");
    website.textContent = business.website;

    if(business.website == "N/A") {
        business.website = "https://www.mcdonalds.com/us/en-us.html";
    };

    website.setAttribute('href', business.website);
    website.setAttribute('target', "_blank")
    website.classList.add("bWeb");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(website);

    document.querySelector("div.buisnesses").appendChild(card);
};

gBtn.addEventListener('click', () => {
    busi.classList.add("grid");
    busi.classList.remove("list");
});

lBtn.addEventListener('click', () => {
    busi.classList.add("list");
    busi.classList.remove("grid");
});


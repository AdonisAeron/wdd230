const requestURL = "https://adonisaeron.github.io/wdd230/chamber/data.json";
const busi = document.querySelector(".spotlight");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['Businesses'];
        shuffleArray(business)
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    if (business.membership == "gold") {
        let card = document.createElement("div");
        let name = document.createElement("h1");
        let img = document.createElement("img");
        let footer = document.createElement('section');
        let lOne = document.createElement('p');
        let lTwo = document.createElement('p');

        console.log(business)

        name.textContent = business.name;

        img.setAttribute('src', business.imageurl);
        img.setAttribute('alt', `${business.name} Logo`);
        img.setAttribute('loading', 'lazy');

        lOne.textContent = business.address;

        if(business.website == "N/A") {

            lTwo.innerHTML = `${business.pNumber} | <strong>No Website</strong>`;

        } else {

            lTwo.innerHTML = `${business.pNumber} | <a href="${business.website}">Website</a>`;
        };

        footer.appendChild(lOne);
        footer.appendChild(lTwo);
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(footer);

        document.querySelector("div.spotlight").appendChild(card);
    }
};

//"name": "A Business Law Firm LLC",
//"address": "1989 S Pine St, Spartanburg, SC 29302",
//"pNumber": "(864) 699-9801",
//"website": "https://www.abizlaw.com/",
//"membership": "gold",
//"imageurl": "https://cp7.cpasitesolutions.com/~abizlawc/images/biz-law-logo.png"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
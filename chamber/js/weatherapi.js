const currentTemp = document.querySelector(".Temp");
const weatherIcon = document.querySelector(".wImage");
const captionDesc = document.querySelector('.clouds');
const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Spartanburg&units=imperial&appid=ec9e25a5242ce0422f6c28f2f6bbd926"

async function apiFetch() {
    try {
        const response = await fetch(requestUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
     } catch (error) {
        console.log(error)
     }
         
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)} &#8457;</strong>`;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    let words = desc.split(" ");
    
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', words);
    captionDesc.textContent = words.join(" ");
}

apiFetch();
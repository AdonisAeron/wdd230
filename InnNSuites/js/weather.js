const currentTemp = document.querySelector(".cTemp");
const weatherImg = document.querySelector(".cImg");
const currentHumidity = document.querySelector(".cHumid");
const OneImg = document.querySelector(".dOne-Img");
const OnePara = document.querySelector(".dOne-p");
const TwoImg = document.querySelector(".dTwo-Img");
const TwoPara = document.querySelector(".dTwo-p");
const ThreeImg = document.querySelector(".dThree-Img");
const ThreePara = document.querySelector(".dThree-p");
const alerText = document.querySelector(".eText");
const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&exclude=minutely,hourly&appid=ec9e25a5242ce0422f6c28f2f6bbd926";

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
        console.log(error);
     }
         
}

function displayResults(weatherData) {

    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)} &#8457;</strong>`
    
    const icon =  `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;

    currentHumidity.innerHTML = `Current Humidity: <strong>${weatherData.current.humidity}</strong>`;

    weatherImg.setAttribute('src', icon);
    weatherImg.setAttribute('alt', desc);

    const dOneImg = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    const oDesc = weatherData.daily[0].weather[0].description;

    OneImg.setAttribute('src', dOneImg);
    OneImg.setAttribute('alt', oDesc);

    OnePara.innerHTML = `Temp: <strong>${weatherData.daily[0].temp.day}</strong> | Humidity: <strong>${weatherData.daily[0].humidity}</strong>`;

    const dTwoImg = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    const tDesc = weatherData.daily[1].weather[0].description;

    TwoImg.setAttribute('src', dTwoImg);
    TwoImg.setAttribute('alt', tDesc);

    TwoPara.innerHTML = `Temp: <strong>${weatherData.daily[1].temp.day}</strong> | Humidity: <strong>${weatherData.daily[1].humidity}</strong>`;

    const dThreeImg = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    const hDesc = weatherData.daily[2].weather[0].description;

    ThreeImg.setAttribute('src', dThreeImg);
    ThreeImg.setAttribute('alt', hDesc);

    ThreePara.innerHTML = `Temp: <strong>${weatherData.daily[2].temp.day}</strong> | Humidity: <strong>${weatherData.daily[2].humidity}</strong>`;

    try {
        let uTime = weatherData.alerts[0].end;
        let date = new Date(uTime * 1000);

        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();

        const formattedTime = hours + ":" + minutes.substring(-2) + ":" + seconds.substring(-2);

        alerText.innerHTML = `There is a current ${weatherData.alerts[0].event} in this area until ${formattedTime}`
    } catch (error) {
        document.querySelector(".eList").classList.add("closed");
    }
}

function closeAlert() {
    console.log("Work2 Electric Boogaloo")
    document.querySelector(".eList").classList.add("closed");
}

apiFetch();
document.querySelector(".alertBtn").addEventListener('click', closeAlert);
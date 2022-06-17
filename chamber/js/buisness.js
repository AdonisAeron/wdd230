const requestURL = "../data.json";
const busi = document.querySelector(".buisnesses");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
    })
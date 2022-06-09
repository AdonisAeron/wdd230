const vText = document.querySelector(".lVisit");
let lVisit = Number(window.localStorage.getItem("lVisit-ls"));

if(lVisit !== 0) {
    sLast = Math.round((cMs - lVisit) / 86400000);
    vText.textContent = sLast;
} else {
    vText.textContent = "It is your first visit!";
}

localStorage.setItem("lVisit-ls", cMs);
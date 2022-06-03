let d = new Date();
let cMs = Date.now();
let mDate = document.lastModified;
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(d);
const myHeader = document.getElementById("myHeader")
cDay = d.getDay()
const images = document.querySelectorAll("img[data-src]");
const vText = document.querySelector(".lVisit");
let lVisit = Number(window.localStorage.getItem("lVisit-ls"));

nfooter = `© ${d.getFullYear()} Spartanburg Chamber | Trevor C. Jones | WDD 230 Project | Last Modified : ${mDate}`;

function toggleMenu() {
    console.log("It worked")
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

if(cDay == 1 || cDay == 2) {

    var tag = document.createElement("p");
    var Msg = document.createTextNode("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.");
    tag.appendChild(Msg)
    myHeader.appendChild(tag)
}

const imgOptions = {
    threshold: 0
};

function preloadImage (img) {
    const src = img.getAttribute("data-src");

    if (!src) {return;}
    img.src = src;
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

if(lVisit !== 0) {
    sLast = Math.round((cMs - lVisit) / 86400000);
    vText.textContent = sLast;
} else {
    vText.textContent = "It is your first visit!";
}

localStorage.setItem("lVisit-ls", cMs);

datefield.innerHTML = `<em>${fulldate}</em>`;
document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);
document.querySelector('.fText').textContent = nfooter;
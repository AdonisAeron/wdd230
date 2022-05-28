let d = new Date();
let mDate = document.lastModified;
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(d);
const myHeader = document.getElementById("myHeader")
cDay = d.getDay()

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

datefield.innerHTML = `<em>${fulldate}</em>`;
document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);
document.querySelector('.fText').textContent = nfooter;
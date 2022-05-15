let d = new Date();
let mDate = document.lastModified;
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(d);

nfooter = `© ${d.getFullYear()} Spartanburg Chamber | Trevor C. Jones | WDD 230 Project | Last Modified : ${mDate}`;

function toggleMenu() {
    console.log("It worked")
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

datefield.innerHTML = `<em>${fulldate}</em>`;
document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);
document.querySelector('.fText').textContent = nfooter;
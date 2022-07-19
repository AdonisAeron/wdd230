let d = new Date();
let mDate = document.lastModified;

nfooter = `© ${d.getFullYear()} Temple Inn & Suites | Trevor C. Jones | WDD 230 Project | Last Modified : ${mDate}`;

function toggleMenu() {
    console.log("Working");
    document.getElementById("primaryNav").classList.toggle('open');
    document.getElementById("hamburgerBtn").classList.toggle('open');
}

document.querySelector(".lModify").textContent = nfooter
document.getElementById("hamburgerBtn").addEventListener('click', toggleMenu);
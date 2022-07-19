function toggleMenu() {
    console.log("Working");
    document.getElementById("primaryNav").classList.toggle('open');
    document.getElementById("hamburgerBtn").classList.toggle('open');
}

function closeAlert() {
    console.log("Work2 Electric Boogaloo")
    document.querySelector(".eList").classList.add("closed");
}

document.querySelector(".alertBtn").addEventListener('click', closeAlert);
document.getElementById("hamburgerBtn").addEventListener('click', toggleMenu);
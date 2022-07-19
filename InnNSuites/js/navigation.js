function toggleMenu() {
    console.log("Working");
    document.getElementById("primaryNav").classList.toggle('open');
    document.getElementById("hamburgerBtn").classList.toggle('open');
}

document.getElementById("hamburgerBtn").addEventListener('click', toggleMenu);
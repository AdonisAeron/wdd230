const Btn = document.querySelector("#Btn");
const lOne = document.querySelector(".list")
const Imt = document.getElementById("favchap");

Btn.addEventListener("click", function() {

    let nLi = document.createElement("li");
    let nBtn = document.createElement("button");
    
    nLi.innerText = Imt.value;
    nBtn.textContent = "X";
    nLi.append(nBtn);
    lOne.appendChild(nLi)

    nBtn.addEventListener("click", () => {
        lOne.removeChild(nLi);
    });

    Imt.focus();
    Imt.value = "";

});
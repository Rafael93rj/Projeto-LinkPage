
let buttonSaibaMais = document.querySelector("#saibaMais")
let divInfo = document.querySelector("#info");

divInfo.style.display = "none";

function saibaMais() {
    if (divInfo.style.display === "none") {
        divInfo.style.display = "block";
    } 
    
    divInfo.style.opacity = 1;
    setTimeout (function () {
        divInfo.style.opacity = 0
        buttonSaibaMais.removeAttribute("disable")
        }, 25000)
    }

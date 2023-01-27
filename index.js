
let buttonSaibaMais = document.querySelector("#saibaMais")
let divInfo = document.querySelector("#info");

divInfo.style.display = "none";

function saibaMais() {
    if (divInfo.style.display === "none") {
        divInfo.style.display = "block";
    } 
    
    setTimeout (function () {
        divInfo.style.display = "none"
        buttonSaibaMais.removeAttribute("disable")
        }, 25000)
    }

const elementoInfo = document.querySelector("#info")
const buttonSaibaMais = document.querySelector("#saibaMais")

function saibaMais () {
    document.getElementById("info").innerHTML = "<p>Olá, me chamo Rafael, tenho 29 anos e estou em busca de uma oportunidade de estágio.<br> No momento estou cursando Análise e Desenvolvimento de Sistemas pela Unisuam e participando do Programa Desenvolve do Grupo Boticário em parceiria com a Alura.<br> Você pode conferir um pouco mais do meu currículo e projetos e um dos links acima.</p>"

    elementoInfo.style.opacity = 1;
    setTimeout (function () {
        elementoInfo.style.opacity = 0
        buttonSaibaMais.removeAttribute("disable")
        }, 25000)
}




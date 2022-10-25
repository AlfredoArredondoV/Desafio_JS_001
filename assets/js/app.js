var titulo = document.querySelector("h5")
titulo.style.color = "#7ba238"
var titulo = document.querySelector("#price")
titulo.style.color = "#7ba238"

const price = 989559;

const boton = document.querySelector("#boton");
const amount = document.querySelector("#amount");
const colour = document.querySelector("#colour");
const total = document.querySelector("#total");
const cantidad = document.querySelector("#cantidad");
const color = document.querySelector("#color");
const laptop = document.getElementById('laptop');
boton.addEventListener("click", () => {
    amount.textContent = cantidad.value;
    // colour.textContent = color.value;
    colour.style.backgroundColor = color.value;
    total.textContent = price * cantidad.value;
    document.getElementById("laptop").src = "https://alfredoarredondov.github.io/Desafio_JS_001/assets/img/laptop_"+color.value+"_frente.webp";
});


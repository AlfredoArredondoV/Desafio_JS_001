var titleLaptop = document.querySelector("h5")
titleLaptop.style.color = "#7ba238"
var titlePrice = document.querySelector("#price")
titlePrice.style.color = "#7ba238"

const priceValue = document.querySelector("#priceValue");
const boton = document.querySelector("#boton");
const amount = document.querySelector("#amount");
const colour = document.querySelector("#colour");
const total = document.querySelector("#total");
const cantidad = document.querySelector("#cantidad");
const color = document.querySelector("#color");
const laptop = document.getElementById('laptop');

boton.addEventListener("click", () => {
    amount.textContent = cantidad.value;
    colour.style.backgroundColor = color.value;
    total.textContent = Number(priceValue.textContent) * Number(cantidad.value);
    document.getElementById("laptop").src = "https://alfredoarredondov.github.io/Desafio_JS_001/assets/img/laptop_"+color.value+"_frente.webp"; // puse solo cambiar imagen, pero no me funciono en github, asi que tuve que colocar la url completa.
});
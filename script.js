let h3= document.querySelector("h3");
let color1= document.querySelector(".color1");
let color2= document.querySelector(".color2");
var container= document.querySelector(".container");

function setGradient(){
    container.style.background = "linear-gradient(to bottom, "
     + color1.value + ", "+color2.value +")";
    h3.textContent = container.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input",setGradient);
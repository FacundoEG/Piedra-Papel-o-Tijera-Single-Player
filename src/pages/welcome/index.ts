const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijerasIMG = require("url:../../assets/tijera.svg");

export function initWelcomePage(params){
 const div = document.createElement("main")

 div.innerHTML = `
 <welcome-title>Piedra Papel o Tijera</welcome-title>
 <menu-button class="welcome-button">Empezar</menu-button>
 <div class="hands-container">
 <img class="welcome-hands" src=${tijerasIMG}>
 <img class="welcome-hands" src=${piedraImg}>
 <img class="welcome-hands" src=${papelImg}>
 </div>
 `

 div.classList.add("welcome-container")

 const welcomeButton = div.querySelector(".welcome-button")
 welcomeButton.addEventListener("click",()=>{
   params.goTo("/index")
 })

  return div
}
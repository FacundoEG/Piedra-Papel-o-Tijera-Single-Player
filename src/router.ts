import { initWelcomePage } from "./pages/welcome";
import { initIndexPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initWinPage } from "./pages/win";
import { initDefeatPage } from "./pages/defeat";

const rutas = [
 {
  path: /\/welcome/ ,
  component: initWelcomePage
 },
 {
  path: /\/index/ ,
  component: initIndexPage
 },
 {
  path: /\/game/ ,
  component: initGamePage
 },
 {
  path: /\/victoria/ ,
  component: initWinPage
 },
 {
  path: /\/derrota/ ,
  component: initDefeatPage
 }
]

export function initRouter(container:Element){
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    container.innerHTML = ""
  
   for (const r of rutas) {
     if(r.path.test(route)) {
       const el = r.component({goTo:goTo})
       container.appendChild(el)
     }
   }
  }
 
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  //ESTO LO BORRE AL PRINCIPIO PERO PUEDE QUEDAR LUEGO
  /* handleRoute(location.pathname) */

  window.onpopstate = ()=>{
    handleRoute(location.pathname)
  }
}
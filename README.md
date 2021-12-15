# Piedra Papel o Tijera (Single Player)

WEBAPP PIEDRA PAPEL O TIJERA ONLINE (SINGLE PLAYER MODE)

Breakpoint a los 750px de ancho.

Link de acceso a la webapp en Github Pages: https://facundoeg.github.io/Piedra-Papel-o-Tijera-Single-Player

Webapp creada para el desafío final del modulo 5 de la carrera de programación web fullstack en APXschool.

El frontend fue diseñado para poder soportar correctamente los componentes dentro de las resoluciones de Iphone5, Iphone 6 y Desktop, con la intención de que sea responsivo para la mayor cantidad de pantallas posibles.

La arquitectura web esta basada en pages montadas como custom elements, usando un router propio para redireccionar las pages.

La escritura del codigo esta basada en funciones declarativas, describiendo al inicio de cada función que logica sucedera, los metodos para el frontend y basics para manejar el state, estan detallados dentro del archivo "state.ts".

Para persistir los datos y poder recargar las paginas, se utilizo el recurso de localStorage, para que cada vez que el usuario cierre el navegador, pueda continuar con los scores que había dejado al terminar su ultima partida.

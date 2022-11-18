import { valida } from "./validaciones.js"

const inputs = document.querySelectorAll("input");//esta const captura todos los input del html y debuele un array
console.log(inputs);
console.log(inputs.forEach( input =>{//iteramos en cada input y llamamos el listener
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
}))

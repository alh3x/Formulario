import { valida } from "./validaciones.js"

const inputs = document.querySelectorAll("input");//esta const captura todos los input del html y debuele un array
console.log(inputs);
inputs.forEach( input =>{//iteramos en cada input y llamamos el listener
    input.addEventListener("blur", (input) => {
        valida(input.target);//target hace referencia al objeto sobre el cual se realiza una evento
    });
})

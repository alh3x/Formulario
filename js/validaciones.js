const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
})

function validarNacimiento(input) {
    let mensaje = "hola"
    input.setCustomValidity(mensaje);
}

function MayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
};
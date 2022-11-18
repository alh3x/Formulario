export function valida(input) {
    const tipoDeInput = input.dataset.tipo//dataset conecta con odos los data del html y .tipo hace referencia al los que tengan ese agreago que puede ser la palabra que querramos
    if(validadores[tipoDeInput]){//verifico que si dentro de validadores exise tipoDeInput coincidiendo el nombre de tipo="nacimiento" con nacimiento del objeto de validadores
        validadores[tipoDeInput](input)
    }
}

const validadores = {//aqui tenemos un objejo nacimiento que tenemos que hacer conicidir con el nombre del data-tipo="nacimiento"
    nacimiento: input => validarNacimiento(input)
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if (!MayorDeEdad(fechaCliente)) {
        mensaje = "almenos debes tener 18 años"
        console.log(mensaje)
    }

    input.setCustomValidity(mensaje);
}

function MayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    console.log(diferenciaFechas,fechaActual);
    return diferenciaFechas <= fechaActual;
}
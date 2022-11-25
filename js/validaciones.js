export function valida(input) {
    const tipoDeInput = input.dataset.tipo//dataset conecta con odos los data del html y .tipo hace referencia al los que tengan ese agreago que puede ser la palabra que querramos
    if(validadores[tipoDeInput]){//verifico que si dentro de validadores exise tipoDeInput coincidiendo el nombre de tipo="nacimiento" con nacimiento del objeto de validadores
        validadores[tipoDeInput](input)
    }
    //al seleccionar un input, y cargar en consola $0.validity nos muestra un objeto validity que no mosrara si el imput presenta determinadas caracteristicasen este caso (valid)si es valido
    //para agregar la clase de css y asi cabiar el color del div contenedor del input en caso de que sea invalido
    if(input.validity.valid){
       input.parentElement.classList.remove("input-container--invalid");//remueve clase css para invalido
       input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");//agrega classe css para invalido
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

//Mensaje para los tipos de errores corescondientes a cada tipo de input
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"//verifica si el valor esta faltando
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "Correo no valido"//verifica el tipo de valor cerrespondiente al input en este caso correo electronico
    },
    password: {
        valueMissing: "El campo password no puede estar vacio.",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales."//correspondiente al los valores correctos de regex de contrasea
    },
    nacimiento: {
        valueMissing: "El campo nacimiento no puede estar vacio.",
        customError: "Almenos debes tener 18 años."//el mensaje que agregarmos anteriormente con seCustomValidity
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "El formato requerido es xxxxxxxxxx 10 numero."
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "La direecion debe tener entre 10 a 40 caracteres."
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "La ciudad debe tener entre 10 a 40 caracteres."
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "El estado debe tener entre 10 a 40 caracteres."
    },
}

const validadores = {//aqui tenemos un objeto nacimiento que tenemos que hacer conicidir con el nombre del data-tipo="nacimiento"
    nacimiento: input =>
    {if(!input.validity.valueMissing){validarNacimiento(input)}}
}

function mostrarMensajeDeError(tipoDeInput, input){//con esta funcion queremos acceder a los ${mensajesDeError} dependiendo del tipo de error, y mostrar el corespondiente en valida()//para no repetir codigo creamos el aray tipoDeError con los tipos de error del validity dentro de ${mensajesDeError}
    let mensaje = ""
    tipoDeError.forEach( error => {
        if (input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    const hoy = new Date();
    let mensaje = ""
    if(!MayorDeEdad(fechaCliente)) {
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
    console.log(diferenciaFechas,"------------------",fechaActual);
    return diferenciaFechas <= fechaActual;
}
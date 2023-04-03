
export function valida(input){
    const tipoDeInput = input.dataset.tipo //dataset es la colección de todos los datas y con el . tipo se obtiene uno concreto en este caso el de nacimiento del index. data-tipo="nacimiento"
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    //console.log(input.parentElement); para saber cual es el padre a para hacer el ejercicio de abajo
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('input-message-error').innerHTML = '';
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

//esta función remplaza todos esos if de abajo
const tipoDeErrores = [
    'valueMissing',
    'typerMismatch',
    'patterMismatch',
    'customError',
];

const mensajeDeError = {
    nombre : {
        valueMissing: "Este campo no puede estar vacío";
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typerMismatch: "Verifica el correo"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patterMismatch: "Al menos 6 caracteres, máximo 12 debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        CustomError: "Debes tener al menos 18 años d edad"
    },
    numero: {
        valueMissing: "Este campo es obligatorio ",
        patterMismatch: "Formato requerido es XXXXXXXXXX"
    },
    direccion: {
        valueMissing: "Este campo es obligatorio ",
        patterMismatch: "Formato requerido es calle Bis.."
    },
    ciudad: {
        valueMissing: "Este campo es obligatorio ",
        patterMismatch: "Formato requerido es "
    },
    estado: {
        valueMissing: "Este campo es obligatorio ",
        patterMismatch: "Formato requerido es"
    },
};

const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = '';
    tipoDeErrores.forEach( error => { // recorro los errores de arriba de tipoDeErrores
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }

    })
        
    return mensaje;
}

const inputNacimiento = document.querySelector("#birth");
inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
});

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    console.log(diferenciaFechas);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes ser mayor de edad (18 años) d edad"
    };

    input.setCustomValidity(mensaje) // setCustomValidity define el mensaje de identificación personalizado  para el elemento selecionado 
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear()+ 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}
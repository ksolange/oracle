import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value; // .value para traer el evento concreto
    const email = document.querySelector("[data-email]").value;

    clientServices
        .crearCliente(nombre,email)
        .then(() => {
//        console.log(respuesta);
            window.location.href = "/screens/registro_completado.html";
            
    }).catch(err => console.log(err));
});
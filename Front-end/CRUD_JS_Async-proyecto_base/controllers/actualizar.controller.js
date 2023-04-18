import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {   
    const url = new URL(window.location);
    //clase 4 editar datos clase 2 conexión para editar
    const id = url.searchParams.get("id");

    
    if(id == null ){
        // console.log("hacer redirección");
        window.location.href = './error.html'; // no sé si /screen o ./
    }

    const nombre =  document.querySelector("[data-nombre]");

    const email = document.querySelector("[data-email]");

    const perfil = await clientServices.detalleCliente(id); /* con esto ya no hace falta el then
    
    .then(
        (perfil) => { */
        nombre.value = perfil.nombre;
        email.value =perfil.email;
};

//async / await 2da clase

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    //clase 4 editar datos clase 2 conexión para editar
    const id = url.searchParams.get("id");

    const nombre =  document.querySelector("[data-nombre]").value;

    const email = document.querySelector("[data-email]").value;

    clientServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = './edicion_concluida.html';
    });
    
});
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {   
    const url = new URL(window.location);
    //clase 4 editar datos clase 2 conexión para editar
    const id = url.searchParams.get("id");

    
    if(id == null ){
        // console.log("hacer redirección");
        window.location.href = './error.html'; // no sé si /screen o ./ + screen
    }

    const nombre =  document.querySelector("[data-nombre]");

    const email = document.querySelector("[data-email]");

    try{
        const perfil = await clientServices.detalleCliente(id); /* con esto ya no hace falta el then
    
    .then(
        (perfil) => { */
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value =perfil.email;
        } else{
            throw new Error();
        }
    } catch(error){
        window.location.href = './error.html';  // no sé si /screen o ./ + screen
    }
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
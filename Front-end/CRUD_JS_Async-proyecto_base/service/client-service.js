const crearNuevaLinea = (nombre,email) => {
//para no tener problemas con el navegador colocar el html en ` `
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>
            ${nombre} 
        </td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
            </ul>
        </td>
    `;
    linea.innerHTML = contenido;
    return linea;
};



const table = document.querySelector("[data-table]"); // se dirige al tbody del html q son las lineas q contenia todo el html de arriba

//CRUD: create, read, update, delete
//métodos Http: post --> create, get --> read, update --> put/patch, delete --> delete.

const listaClientes = () => {
    const promise = new Promise( (resolve,reject) => { // se puede manejar como un function o =>
        const http = new XMLHttpRequest();
        http.open("GET","http://localhost:3000/perfil"); //recibe 2 parámetros(1ro método y 2do la url)
        
        http.send(); //envía la repetición 
        
        http.onload = () => {    //una vez termine se inicia a usar esta función 
            const response = JSON.parse(http.response); // JSON lo transforma 

            if(http.status >= 400){ //existe un error
                reject(response);
            }else{
                resolve(response); // este response se vuelve la data de abajo del listaClientes.then(data)
            }
                        
            /*const http2 = new XMLHttpRequest();
            http2.open("GET", "http://localhost:3000/perfil/hoy"); // ejemplo para saber los perfiles q se crearon hoy
            http2.send();
            http2.onload = () =>{
                const data2 = JSON.parse(http2.response)
            }*/    
        };
    })
    return promise;
};

listaClientes().then((data) => {
    console.log(data);
    data.forEach(perfil => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);      
    table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error "));



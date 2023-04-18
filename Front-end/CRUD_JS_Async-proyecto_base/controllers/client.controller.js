// ESTE ARCHIVO ES LA COMUNICACIÓN ENTRE JS Y EL HTML 

import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
    //para no tener problemas con el navegador colocar el html en ` `
        const linea = document.createElement("tr");
        const contenido = `
            <td class="td" data-td>
                ${nombre} 
            </td>
            <td>${email}</td>
            <td>
                <ul class = "table__button-control">
                    <li>
                      <a 
                        href = "../screens/editar_cliente.html?id=${id}"
                        class = "simple-button simple-button--edit"
                        >Editar
                      </a>
                    </li>
                    <li>
                      <button
                        class = "simple-button simple-button--delete"
                        type = "button" id = "${id}">
                        Eliminar
                      </button>
                    </li>
                </ul>
            </td>
        `;
        linea.innerHTML = contenido;
        const btn = linea.querySelector("button");
        btn.addEventListener("click", () => {
          const id = btn.id;
          // lo comentado abajo del eliminarCliente lo uso aquí 
          clientServices.eliminarCliente(id).then(respuesta => {
            console.log(respuesta);
          }).catch(err => alert("Ocurrió un error"));
        });
        
        return linea;
    };
    
    const table = document.querySelector("[data-table]"); // se dirige al tbody del html q son las lineas q contenia todo el html de arriba
    
    clientServices
        .listaClientes()
        .then((data) => {
        //console.log(data);
        data.forEach(({nombre, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);      
        table.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert("Ocurrió un error "));

  /*const eliminarCliente = (id) => {
    console.log("Eliminar a: ", id);
  }*/

//CRUD: create, read, update, delete
//métodos Http: post --> create, get --> read, update --> put/patch, delete --> delete.

//FETCH API
const listaClientes = () =>  
  fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json()
  );

// AQUÍ SE QUITÓ EL RESTO DE CÓDIGO, PORQ SE DEJA LA COMUNICACIÓN CON EL CLIENTE EL FETCH 


const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()// objeto en el cual se le envía toda la información} se habla de la librería uui con id para q lo haga d forma automática
    }),  
  });
};
 
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {nombre, email}    )
  })
  .then(respuesta => respuesta)
  .catch((err) => console.log(err));
};


export const clientServices = {
  listaClientes, 
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
const btn = document.querySelector('[data-form-btn]'); /*selecciona elemento dentro de nuestro arbol en este caso el botón agregar-- en index.html coloco data-form-btn en etiqueta button */ //1
//const input  = document.querySelector("[data-form-input]")     //5
console.log(btn);   
//2
//console.log(input.value);  //6 


  //Arrow function 
//btn.addEventListener('click', function (evento){ 3

const createTask = (evento) => {
    evento.preventDefault(); //7
    const input  = document.querySelector('[data-form-input]');     //5
    console.log(input.value); 
    //6 
};


btn.addEventListener('click', createTask);
// listener es el click de arriba del botón, 



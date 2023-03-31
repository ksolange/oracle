(() =>  { 
  const btn = document.querySelector('[data-form-btn]'); /*selecciona elemento dentro de nuestro arbol en este caso el botón agregar-- en index.html coloco data-form-btn en etiqueta button */ //1
//const input  = document.querySelector("[data-form-input]")     //5
  
//2
//console.log(input.value);  //6 


  //Arrow function 
//btn.addEventListener('click', function (evento){ 3

const createTask = (evento) => {
    evento.preventDefault(); //7
    const input  = document.querySelector('[data-form-input]');     //5
    const value = input.value; // 2da parte clase 2
   // se cambia esta 3 parte--- const task =  document.querySelector(['data-task']);  -- por // 2da parte clase 2
   const list = document.querySelector('[data-list]'); // 4ta parte clase 2
   const task = document.createElement("li"); // cambia querSelector por CreateElement por lí
   task.classList.add("card"); // agrego la clase de la lista
    input.value = ''; //limpieza input  // 2da parte clase 2
    // 3ra parte clase 2 console.log(value);  // 2da parte clase 2
    const taskContent = document.createElement("div"); // esta línea reemplaza el <di> de la línea 23
    taskContent.appendChild(checkComplete()); // el appendChild tiene un orden 1ro agregar los checkComplete, luego los titleTask
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    taskContent.appendChild(deleteIcon());
    const content = `
    
    </div>`; // backticks pego dentro de esas backticks el contenido del html del div q esta entre etiquetas comentariadas, se quita el hacer curso de DOM y se pone ---> $ {value}
    // 5ta parte clase 4 task.innerHTML = content; // 3ra parte clase 2, con esta propiedad innerHTML se le dice q guarde lo ingresado por el usuario
    task.appendChild(taskContent);

    task.appendChild(deleteIcon());

    list.appendChild(task); // 4ta parte clase 2, agregar a la lista
 
    //console.log(content); // 2da parte clase 2
    //6 
};


btn.addEventListener('click', createTask);
// listener es el click de arriba del botón, 

const checkComplete = () => {
  const i = document.createElement("i")
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click", compleTask);
  return i;
}; 


const compleTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
};

// Immediately onvoked function expression IIFE : funciones cuando se declaran funcionan

const deleteIcon =() => {
  /*const content = `
  <i class = "fas fa-trash-alt trashIcon icon"></i>`;*/
  const i = document.createElement("i");  
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon"); // hace q se me repita al lado de las letras
  i.addEventListener("click", deleteTask);
  return i
}

const deleteTask = (evento) =>{
  
  const parent = evento.target.parentElement;
  parent.remove();
};

})();

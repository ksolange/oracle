import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('input'); //selecciona todos los inputs y agrega 

inputs.forEach(input => {
    input.addEventListener('blur', (input => {
        valida(input.target)
    }));
});
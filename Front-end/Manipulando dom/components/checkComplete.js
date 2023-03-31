const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", compleTask);
    return i;
  }; 
  
  // Immediately onvoked function expression IIFE : funciones cuando se declaran funcionan
  const compleTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
  export default checkComplete;
  
import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
//import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete/index.js";
import Stepper from "../Stepper/index.js";
import Step from "./Step/index.js";

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from "./DatosPersonales/validaciones";
import { validarInput } from "./DatosEntrega/validaciones";


const Form = () => {
const [step, setStep] = useState();// coloco aquí el número para probar

/* const selectStep = () => {
  switch (step) {
    case 0: return <DatosUsuario/>
    break;
    case 1: return <DatosPersonales/>
    break;
    case 2: return <DatosEntrega/>
    break;
    default: return <Complete /> 
    break;
  }
};*/
const [pasos, setPasos] = useState({});

const onSubmit = (e, step, pasos) => {
  console.log(step);
  e.preventDefault();
  let newStep = step + 1;
  console.log(newStep);
  setStep(newStep);
  if (newStep === 3) {
    console.log("Eviar datos al backend", pasos);
  }
};

const handleChange = (element, position, currentStep, validator, pasos) => { // hace referencia al i del .map del input del archivo index js
  const value = element.target.value;
  const valid = validator(value);
  const cp = { ...pasos };
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].valid = valid;

    setPasos(cp);
    console.log(position);
    console.log(currentStep);
    console.log(validator);
};

const stepsFlow = {
  0: {
    inputs:[
      {
        label: "Correo electrónico",
        type: "email",
        value: null,
        onChange: handleChange,
        helperTex: "Ingresa un correo válido", 
        validator: validarEmail, 
      },
      {
        label: "Contraseña",
        type: "password",
        value: null,
        onChange: handleChange,
        helperTex: "Ingresa  minímo 8 caracteres",
        validator: validarPassword,
      }, 
      {
        label: "Cuenta de github",
        type: "text",
        value: "",
        valid: null,
        onChange: handleChange,
        helperText:
          "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
        validator: validarPassword,
      },
    ],
    buttonText: "Siguiente",
    onSubmit,
  },
1: {
  inputs: [
    {
      label: "Nombre",
      type: "text",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 2 caracteres y máximo 30 caracteres.",
      validator: validarNombre,
    },
    {
      label: "Apellidos",
      type: "text",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 2 caracteres y máximo 50 caracteres.",
      validator: validarApellidos,
    },
    {
      label: "Número telefonico",
      type: "number",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 8 digitos y máximo 14 digitos.",
      validator: validarTelefono,
    },
  ],
  buttonText: "Siguiente",
  onSubmit,
},
2: {
  inputs: [
    {
      label: "Direccion",
      type: "text",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 4 caracteres.",
      validator: validarInput,
    },
    {
      label: "Ciudad",
      type: "text",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 4 caracteres.",
      validator: validarInput,
    },
    {
      label: "Estado/Provincia",
      type: "text",
      value: "",
      valid: null,
      onChange: handleChange,
      helperText: "Ingresa al menos 4 caracteres.",
      validator: validarInput,
    },
  ],
  buttonText: "Crear cuenta",
  onSubmit,
  },
};

useEffect(() => {
  setPasos(stepsFlow);
}, []);

const updateStep = (step) => {
  setStep(step);
}


// la mejor opción es esta:
const steps = {
  0: <DatosUsuario updateStep={updateStep}/>,
  1: <DatosPersonales updateStep={updateStep}/>,
  2: <DatosEntrega updateStep={updateStep}/>,
  3: <Complete />,
};

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {(step < 3 ) && <Stepper step={step} />}
        {/*{ steps[step] }*/} 
        <Step data={stepsFlow[step] } step={step} />    
      </FormSpace>
    </Box>
  );
};

export default Form;

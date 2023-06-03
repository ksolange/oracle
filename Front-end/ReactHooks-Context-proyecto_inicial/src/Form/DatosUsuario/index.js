import React, { useState }  from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones.js";

/*class ComponenteClase extends React.Component{
  render(){
    return<>Contenido</>
  }
}

const ComponenteFuncion = () => {
  return <>Contenido</>  
}
*/
const DatosUsuario = ({ updateStep }) =>  {
  const [email,setEmail] = useState({value: "",
  valid: null})

  const [password, setPassword] = useState({value: "", valid: null })

  /*
  constructor(props){
    super(props);
    this.state = {
      email: {
        value: 'karen',
        valid: true
      },
      password: {
        value: 'abc',
        valid: true
      },
    }
  */
  

  
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit = { (e) => {
          e.preventDefault();
          if(email.valid && password.valid){
            console.log("Siguiente formulario");
            console.log(email, password);
            updateStep(1);
          }else{
            console.log(email, password);
          }
          //this.setState ({ email: { value: input.target.value } })
        } 
      }
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          // onBlur={() => validarEmail(email)}
          type="email"
          error={email.valid === false} 
          helperText={email.valid === false && "Ingresa un correo electrónico válido"} //era true && si recibe un false no va a mostrar nada debe ser true  y de = forma puede escribirse así true ? "Ingresa....
          value = { email.value }
          onChange = { (input)  => {
            const email = input.target.value;
            const valido = validarEmail(email); // opción 2
            // esta también es una opción 1:   validarEmail(email)
            // se cuela opción 1 setEmail({value: email, valid: true});
            setEmail({value: email, valid: valido}); // se cuela opción 2
          }
        } //12:01  no me reconoce el puerto 3005 buscar q hacer
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={password.valid === false && "Inggresa una contraseña valida,  al menos 1 caracter &/"}
          value = {password.value}
          onChange = { (input) =>{
            const password = input.target.value;
            validarPassword(password)
            // opción 1 parte 2 setPassword({value: input.target.value, valid: true}) 
            setPassword({value: password, valid: validarPassword(password)});
          }
           //  no me reconoce el puerto 3005 buscar q hacer
        }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
};

export default DatosUsuario;

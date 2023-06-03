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
const DatosUsuario = () =>  {
  const [email,setEmail] = useState({value: "Karen", valid: true})

  const [password, setPassword] = useState({value: "abc", valid: true })

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
          this.setState ({ email: { value: input.target.value } })
        } 
      }
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
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
          value = {password.value}
          onChange = { (input) =>{
            const password = input.target.value;
            validarPassword(password)
            // opción 1 parte 2 setPassword({value: input.target.value, valid: true}) 
            setPassword({value: input.target.value, valid: validarPassword(password)});
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

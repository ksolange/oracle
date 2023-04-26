import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

function FormSignUp () {
    const [ name,setName ] = useState(''); 
    useEffect(() => {

    }, [name])
    return (
    <form> {/*debe ( el <form al lado del return, por lo contrario no funcional */}
        <TextField
            id = "name" 
            label = "Nombre" 
            variant = "outlined" 
            fullWidth = {true}
            margin = "normal"
            onChange = {(e) => {
                //console.log(e.target.value);
                // console.log("Name 1: ", name);
                setName(e.target.value);
                console.log("Name 2: ", name);
            }}
            value = { name }
        />
        <TextField
            id = "lastname" label = "Apellidos" 
            variant = "outlined" 
            fullWidth = {true}
            margin = "normal"
        />
        <TextField
            id = "email" label = "Email" variant = "outlined" 
            fullWidth = {false}
        />
        
        <label>Promociones</label>
        <Switch defaultChecked />        
        <label>Novedades</label>
        <input type = "checkbox"/>
        <Button variant = "contained" color = "error" >Registrarse</Button> {/* para hacer referencia a este button del package q descargue cambio por mayúscula */}
    </form>)
}

export  default FormSignUp;

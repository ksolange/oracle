import { useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";

function FormSignUp ({handleSubmit}) {
// se ahorra este paso nombrando el handleSubmit como parámetro en la función y con { }   const { handleSubmit } = props; {/* mando a llamar el handleSubmit de la función de app.js */}

    const [ name,setName ] = useState(''); 
    const [lastName, setLastName] = useState(''); // así deberían ser usado para q sea más entendible y comprensible para el que los lea
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    return (
    <form 
        onSubmit = {(e) => {
            e.preventDefault(); // preventDefault previene realice comportamiento por defecto false o get ...etc
            handleSubmit({
                name, 
                lastName, 
                email, 
                prom, 
                nov,
            });
        }}
    > {/*debe ( el <form al lado del return, por lo contrario no funcional */}
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
                
            }}
            value = { name }
        />
        <TextField
            id = "lastname" label = "Apellidos" 
            variant = "outlined" 
            fullWidth = {true}
            margin = "normal"
            value = {lastName}
            onChange = {(e) => setLastName(e.target.value)}
        />
        <TextField
            id = "email"
            label = "Email"
            variant = "outlined" 
            fullWidth = {false}
            margin = "normal"
            value = {email}
            onChange = {(e) => 
                setEmail(e.target.value)
            }
        />
        <FormGroup>
            <FormControlLabel
                control = {
                    <Switch 
                        // como colocaba problema quito está línea defaultChecked = { prom } y dejo q solo el checked lo realizará
                        checked = { prom } 
                        onChange = {(e) =>
                            setProm(  //setProm recibe un true o false
                                e.target.checked
                            )
                        } 
                    />
                }
                label = "Promociones" 
            />

            <FormControlLabel
                control = {
                    <Switch 
                        checked = { nov }
                        onChange={(e) => 
                            setNov(e.target.checked)
                        } 
                    />
                }
                label = "Novedades" 
            />    
        </FormGroup>
        {/* <input type = "checkbox"/> */}
        <Button 
            variant = "contained" 
            type = "submit" 
        >
            Registrarse
        </Button> {/* para hacer referencia a este button del package q descargue cambio por mayúscula */}
        
        
    </form>)
}

export  default FormSignUp;

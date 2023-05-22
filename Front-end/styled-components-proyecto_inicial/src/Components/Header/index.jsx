import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { colorPrimario } from "../UI/variables";


const StyledHeader = styled.nav`
  background-color:${colorPrimario}; // para q funcione la sintaxis tengo q colocarle entr { } y llamar a la función q esta en variables.js
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white; 
  color: ${ (props) => props.primary ? "white": colorPrimario };
  background: ${(props) => props.primary ? "transparent" : "white"};
  `
/* ESTO VA arriba dentro de color: ${ (props) => props.primary == "activado" ? "white": colorPrimario }; // cambio de color verificando q sea el color primario en caso contrario cambia de color a colorPrimario, se puede ser más específico colocandole el "activado" y  la etiqueta BtnHeader colocar  = {"activado"}
también se puede hacer así color: ${ (primary) => primary ? "white": colorPrimario };
sin usar props
*/

const Header = () => {
  return (
    <StyledHeader>
      <Logo src = {logo} alt = "Logo Smart Bank" /> {/* se puede quitar el className="imagen-logo"  */}
      <div>
        {/*BtnHeader primary = {"activado"} href="https://google.com"*/}
        <BtnHeader href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader primary href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;

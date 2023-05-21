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


const Header = () => {
  return (
    <StyledHeader>
      <Logo src = {logo} alt = "Logo Smart Bank" /> {/* se puede quitar el className="imagen-logo"  */}
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ayuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Salir
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;

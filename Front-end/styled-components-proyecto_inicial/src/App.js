import React, { useState } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle.js";

import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas.js";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro);

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme = {tema ? temaClaro : temaOscuro}> {/* se encápsula todo  ---- PUEDO CAMBIAR A MODO temaClaro y funciona d igual manera*/}
      <GlobalStyle />
      <BtnTema onClick = {toggleTema}>
        <SwitcherTema tema = {tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

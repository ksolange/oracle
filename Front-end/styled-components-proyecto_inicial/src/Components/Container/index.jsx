import React from "react";

import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";


const StyledContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`
// es cualquier etiqueta html q deseemos colocar estilo por eso div... section
const StyledContent = styled.section` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;

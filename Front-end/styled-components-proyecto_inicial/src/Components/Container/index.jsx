import React from "react";

import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List/index.jsx";

const StyledContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
  @media (max-width: 800px) { 
    flex-direction: column;
  }
`;
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
        <List />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;

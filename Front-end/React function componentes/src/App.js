
import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSingUp'; 

function App() {
  return (
    <>
      <Container component = "section" maxWidth = "sm">
        <h1>Formulario de Registro </h1>
        <FormSignUp/>
      </Container>
    </>
  );
}

export default App;

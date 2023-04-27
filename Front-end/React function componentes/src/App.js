
import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSingUp'; 

function App() {
  
  const handleSubmit = (valores) => { // se debe compartir esta función en el componente o etiqueta de abajo de FormSignUp **
    console.log('APPJS: ' ,valores);
  }
  
  return (
    <>
      <Container component = "section" maxWidth = "sm">
        <h1>Formulario de Registro </h1>
        <FormSignUp handleSubmit = {handleSubmit} /> {/* ** */}
      </Container>
    </>
  );
}

export default App;

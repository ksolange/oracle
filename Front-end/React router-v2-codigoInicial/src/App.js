import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Header from './components/Header.jsx';
import Post from './pages/Post';

import Categoria from './pages/Categoria.jsx';

import Page404 from './pages/Page404';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  /*const location = window.location.pathname;
  console.log(location);

  const Router = ( ) => {
    if(location === "/" ) {
      return <Home />
    } else {
      <Sobre />
    }
  } */
  return (
    <>
      {/*Router()*/}
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element = {<Home />} /> {/*1ro envío el path el camino la ruta como tal. 2. elemento q quiero q se muestre */ }
          <Route path = '/sobre' element = {<Sobre />} />
          {/* cuando no exista el elemento buscado se puede hacer así
          <Route path = '*' element = {<h1>No existe </h1> } /> pero no es lo mejor, lo adecuado es crear una nueva page, en la siguiente línea está el ejemplo */}
          <Route path = '/posts/:id' element = {<Post/>} />
          <Route path='/categoria/:id/*' element={ <Categoria />}/> {/* me faltaba la < /> en Categoria */}
          <Route path = '*' element = {<Page404 /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";

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
        <Routes>
          <Route path = '/' element = {<Home />} /> {/*1ro envío el path el camino la ruta como tal. 2. elemento q quiero q se muestre */ }
          <Route path = '/sobre' element = {<Sobre />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

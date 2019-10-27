import React from 'react';
/*import ReactMapGL, { Marker } from 'react-map-gl';
import parques from './parques';*/

import './App.css';
import 'bulma/css/bulma.css';

import Menu from './component/Menu';
import Inicio from './component/Inicio';
import MapaPlanta from './component/MapaPlanta';
import MapaDonar from './component/MapaDonar';
import Cuenta from './component/Cuenta';
import Nosotros from './component/Nosotros';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu/>
      <div className="container p-5" style={{margin:'0'}}>
        <Route path="/" exact component={Inicio} />
        <Route path="/mapaPlanta" exact component={MapaPlanta} />
        <Route exact path="/cuenta"><Cuenta user="marco123"/></Route>
        <Route path="/mapaDonar" exact component={MapaDonar}/>
        <Route path="/nosotros" exact component={Nosotros}/>
      </div>
    </Router>
  );
}
export default App;

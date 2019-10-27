import React from 'react';
/*import ReactMapGL, { Marker } from 'react-map-gl';
import parques from './parques';*/

import './App.css';
import 'bulma/css/bulma.css';

import Menu from './component/Menu';
import Inicio from './component/Inicio';
import MapaPlanta from './component/MapaPlanta';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Menu/>
        <div className="container p-5">
          <Route path="/" exact component={Inicio} />
          <Route path="/mapaPlanta" exact component={MapaPlanta} />
          <Route/>
          <Route/>
          <Route/>
        </div>
    </Router>
  );
}
export default App;

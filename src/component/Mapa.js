import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import parques from '../parques';

export default class Mapa extends Component{
//Basicamente este estado sirve para indicarle en que posicion va a empezar el mapa en este caso Mty.
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 25.6397836,
      longitude: -100.2931016,
      zoom: 10
    }
  }


  render(){
    return (
      <div>
        {/* Pasamos nuestra informacion ...this.state.viewport
            Cada que detecte un cambio (zoom, mover y de más) mandará
            un arreglo con la nueva informacion viewport*/}
        <ReactMapGL {...this.state.viewport} 
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken="pk.eyJ1IjoidmFsZG90ZSIsImEiOiJjazFsMzZjejkwMWhiM2JuemgybzR0ZzhyIn0.-XBXaq384sEUIV7H7W3dtg">
            {parques.map(parque => (
              <Marker key={parque.id} latitude={parque.latitude} longitude={parque.longitude}>
                <button className="marker-btn" onClick={e => {
                  e.preventDefault(); //Quita lo que haga por default al hacerle click.
                }}>
                  <img src="/tree.svg" alt="Icono Planta"/>
                </button>
              </Marker>
            ))}
        </ReactMapGL>
        
      </div>
    )
  }
}
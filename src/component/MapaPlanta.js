import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'bulma/css/bulma.css'
import parques from '../parques';
import Geocoder from 'react-map-gl-geocoder';

export default class MapaPlanta extends Component{
//Basicamente este estado sirve para indicarle en que posicion va a empezar el mapa en este caso Mty.
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 25.6397836,
      longitude: -100.2931016,
      zoom: 10
    },
    selectedTree: null
  }

  mapRef = React.createRef();
  render(){
    return (
      <div>
        {/* Pasamos nuestra informacion ...this.state.viewport
            Cada que detecte un cambio (zoom, mover y de más) mandará
            un arreglo con la nueva informacion viewport*/}
        <ReactMapGL
          ref={this.mapRef} 
          {...this.state.viewport} 
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken="pk.eyJ1IjoidmFsZG90ZSIsImEiOiJjazFsMzZjejkwMWhiM2JuemgybzR0ZzhyIn0.-XBXaq384sEUIV7H7W3dtg">
            {parques.map(parque => (
              parque.status ?
              <Marker key={parque.id} latitude={parque.latitude} longitude={parque.longitude}>
                <button className="marker-btn" onClick={e => {
                  e.preventDefault(); //Quita lo que haga por default al hacerle click.
                  this.setState({selectedTree: parque})
                }}>
                  <img className="icono" src="./img/shovel.svg" alt="Icono Pala"/>
                </button>
              </Marker>
              :
              <div></div>
            ))}
            <Geocoder
               mapboxApiAccessToken="pk.eyJ1IjoidmFsZG90ZSIsImEiOiJjazFsMzZjejkwMWhiM2JuemgybzR0ZzhyIn0.-XBXaq384sEUIV7H7W3dtg"
                   onViewportChange={(viewport) =>this.setState({viewport})}
                    mapRef={this.mapRef}
                    position="top-left"
                  ></Geocoder>
            {(this.state.selectedTree)? (
            <Popup 
              longitude={this.state.selectedTree.longitude}
              latitude={this.state.selectedTree.latitude}
              onClose={() => {
                this.setState({selectedTree:null})
              }}
              
             >
              <div>
                {this.state.selectedTree.nombre}
                <br></br>
                Titular: {this.state.selectedTree.titular}
                <br></br>
                Descripción: {this.state.selectedTree.descripcion}
                <br></br>
                Correo: {this.state.selectedTree.correo}
                <br></br>
                Teléfono: {this.state.selectedTree.telefono}
              </div>

            </Popup>
              ) :null}
        </ReactMapGL>
        
      </div>
    )
  }
}
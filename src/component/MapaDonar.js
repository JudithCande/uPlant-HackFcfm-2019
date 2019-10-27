import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Geoocoder from 'react-map-gl-geocoder';
import Pin from './Pin';
import 'bulma/css/bulma.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'


export default class MapaDonar extends Component{
    state = {
        viewport: {
          width: "100vw",
          height: "100vh",
          latitude: 25.6397836,
          longitude: -100.2931016,
          zoom: 10
        },
        searchResult:{
            latitude: 25.6397836,
            longitude: -100.2931016,
        },
        clicked: false,
        form:{
            placeName:'',
            placeOwner:'',
            telNumber:'',
            email: '',
            description:'',
        }
      }
      onSubmit = (e) => {
        e.preventDefault();
        const newPlace = {
          placeName: this.state.form.placeName,
          placeOwner: this.state.form.placeOwner,
          telNumber: this.state.form.telNumber,
          email: this.state.form.email,
          description: this.state.form.description
        } 
        console.log(newPlace)
        this.setState({clicked:false})
        
      
        };
        
        onInputChange = e =>{

          this.setState({
            form: { ...this.state.form, [e.target.name]: e.target.value }
          })
        }
        

      mapRef = React.createRef();
    render(){
        return(
            <div>
                <ReactMapGL
                    ref={this.mapRef}
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                    mapboxApiAccessToken="pk.eyJ1IjoidmFsZG90ZSIsImEiOiJjazFsMzZjejkwMWhiM2JuemgybzR0ZzhyIn0.-XBXaq384sEUIV7H7W3dtg"
                >
                    <Geoocoder
                        mapRef={this.mapRef}
                        onViewportChange={(viewport) => this.setState({viewport})}
                        mapboxApiAccessToken="pk.eyJ1IjoidmFsZG90ZSIsImEiOiJjazFsMzZjejkwMWhiM2JuemgybzR0ZzhyIn0.-XBXaq384sEUIV7H7W3dtg"
                        position="top-left"
                        trackProximity
                        onResult={(result) => {
                            this.setState({
                                searchResult:{
                                    longitude: result.result.center[0],
                                    latitude: result.result.center[1]
                                }
                            })
                        }}
                    >
                    </Geoocoder>
                    <Marker
                        longitude={this.state.searchResult.longitude}
                        latitude={this.state.searchResult.latitude}
                        draggable
                        onDragEnd={(event) => this.setState({
                            searchResult:{
                                latitude: event.lngLat[1],
                                longitude: event.lngLat[0]
                            }
                        })}
                        
                    >
                        <p style={{display:"inline-grid"}}>
                                <button 
                                    className=" button is-small is-dark"
                                    style={{marginBottom:"10px"}}
                                    onClick={() =>{
                                        this.setState({
                                            clicked: true
                                        })
                                    }}
                                    >
                                        Fijar Ubicacion
                                    </button>
                            <Pin size={20} ></Pin>
                        </p>
                    </Marker>
                </ReactMapGL>
                {this.state.clicked ? (
                    <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                      <header className="modal-card-head">
                        <p className="modal-card-title">Donar Terreno</p>
                        <button onClick={() => this.setState({clicked:false})} className="delete" aria-label="close"></button>
                      </header>
                      <section className="modal-card-body">
                                    <section className="section">
                            <form onSubmit={this.onSubmit}>
                            <div className="container">
                            <div className="columns is-mobile is-centered">
                            <div className="column is-half">
                    
                                <div className="field">
                                    <div className="control">
                                    <input className="input" 
                                    type="text" 
                                    name="placeName"
                                    placeholder="Nombre del lugar"
                                    onChange={this.onInputChange}
                                        value={this.state.form.placeName}
                                    />
                                    </div>
                                </div>
                    
                    
                                <div className="field">
                                    <div className="control">
                                    <input className="input" type="text" 
                                    name="placeOwner"
                                    placeholder="Titular"
                                    onChange={this.onInputChange}
                                    value={this.state.form.placeOwner}
                                    />
                                    

                                    </div>
                                </div>
                    
                                <div className="field">
                                    <div className="control">
                                    <input className="input"
                                    type="text" 
                                    name="telNumber"
                                    placeholder="Telefono de contacto"
                                    onChange={this.onInputChange}
                                    value={this.state.form.telNumber}
                                    />
                                    </div>
                                </div>
                    
                                <div className="field">
                                    <div className="control">
                                    <input className="input" 
                                    type="text" 
                                    name="email"
                                    placeholder="Correo de contacto" 
                                    onChange={this.onInputChange}
                                    value={this.state.form.email}
                                    />
                                    </div>
                                </div>
                    
                                <div className="field">
                                    <div className="control">
                                    <textarea className="textarea"
                                    name="description"
                                    placeholder="Descripcion del terreno"
                                    onChange={this.onInputChange}
                                    value={this.state.form.description}
                                    ></textarea>
                                    </div>
                                </div>
                    
                                <button type="submit" className="button is-success is-fullwidth">Save Changes</button>
                            
                                </div> 
                                </div>
                            </div>
                            </form>
                        </section >
                      </section>
                      <footer className="modal-card-foot">
                        
                      </footer>
                    </div>
                  </div>
                )
                :null}
            </div>
        )
    }
}
import React, { Component } from 'react'
import 'bulma/css/bulma.css'



export default class PlaceRegister extends Component {
  
  state = {
    placeName:'',
    placeOwner:'',
    telNumber:'',
    email: '',
    description:'',
  };
  
  onSubmit = (e) => {
  e.preventDefault();
  const newPlace = {
    placeName: this.state.placeName,
    placeOwner: this.state.placeOwner,
    telNumber: this.state.telNumber,
    email: this.state.email,
    description: this.state.description
  } 
  
  console.log(this.props.props.clicked)

  };
  
  onInputChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
        return (
            <section className="section">
              <form onSubmit={this.onSubmit}>
            <div className="container">
              <div className="columns is-mobile is-centered">
              <div className="column is-half">
      
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" 
                      name="placeName"
                      placeholder="Nombre del lugar"
                       onChange={this.onInputChange}
                        value={this.state.placeName}
                       />
                    </div>
                  </div>
      
      
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" 
                      name="placeOwner"
                      placeholder="Titular"
                      onChange={this.onInputChange}
                      value={this.state.owner}
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
                       value={this.state.telNumber}
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
                      value={this.state.email}
                      />
                    </div>
                  </div>
      
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea"
                       name="description"
                       placeholder="Descripcion del terreno"
                       onChange={this.onInputChange}
                       value={this.state.description}
                       ></textarea>
                    </div>
                  </div>
      
                  <button type="submit" className="button is-success is-fullwidth">Save Changes</button>
               
                  </div> 
                  </div>
            </div>
            </form>
          </section >
        )
    }
}

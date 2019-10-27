import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bulma/css/bulma.css';

export default class Inicio extends Component{
    render(){
        return(
            <section width='100%'>
                <section style={{
                                padding: '100px',
                                width:'50%',
                                float:'left'
                                }}
                >
                    <h1 style={{fontSize: '100px',
                                color: '#535353',
                                fontWeight: 'bold', 
                                fontFamily: 'Rubik'
                        }}
                    >
                        uPlant</h1>
                    <p style={{fontSize: '20px', 
                                color: '#9c9c9c',
                                fontFamily: 'Tahoma',
                                marginTop: '-30px'
                        }}
                    >
                        Adopta un árbol
                    </p>
                    <button className='button is-success is-rounded'
                            style={{marginTop: '30px',
                                    fontSize: '20px'
                                }}
                    >
                        <Link to="/mapaPlanta" style={{textDecoration:"none", color:"black"}}>Adopta</Link>
                    </button>
                    <section style={{width:'100%', marginTop: '20px'}}>
                        <section style={{width:'45%',
                                        float:"left"         
                            }}>
                            <h1 style={{fontWeight: "bold"}}>
                                Unete
                            </h1>
                            <p>
                                Más de 10,000 nuevos padres de un árbol. Cada año la comunidad crece y crece.
                            </p>
                        </section>
                        <section style={{width:'45%',
                                        float: "right"
                                }}>
                            <h1 style={{fontWeight: "bold"}}>
                                Creemos
                            </h1>
                            <p>
                                Existen personas ahí afuera ¡Como TU! que desean ayudar al planeta tanto como nosotros.
                            </p>
                        </section>
                    </section>
                </section>
                <section style={{
                                width:'50%',
                                float:'left'
                                }}
                >
                    <img src='./img/arbo2.png' alt="arbol"/>
                </section>
            </section>
        )
    }
}
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bulma/css/bulma.css';

export default class Menu extends Component{
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <p className="navbar-item">
                            <Link to='/'>
                                <img src='./img/logo.png' alt="logo" style={{float: 'left', width:'30px'}}/>
                            </Link>
                        </p>
                        <div className="navbar-menu">
                            <div className="navbar-start" >
                                <Link to='/' className="navbar-item" 
                                    style={{marginLeft:'50px',
                                            color: '#535353',
                                            fontWeight: "bold",
                                            fontFamily: 'Tahoma'
                                    }}
                                >
                                    Inicio
                                </Link>
                                <Link to='/mapaPlanta' className="navbar-item" 
                                    style={{marginLeft:'50px',
                                        color: '#535353',
                                        fontWeight: "bold",
                                        fontFamily: 'Tahoma'
                                    }}
                                >
                                    Plantar
                                </Link>
                                <Link to='/mapaDonar' className="navbar-item" 
                                    style={{marginLeft:'50px',
                                            color: '#535353',
                                            fontWeight: "bold",
                                            fontFamily: 'Tahoma'
                                    }}
                                >
                                    Donar
                                </Link>
                                <Link to='/cuenta' className="navbar-item" 
                                    style={{marginLeft:'50px',
                                        color: '#535353',
                                        fontWeight: "bold",
                                        fontFamily: 'Tahoma'
                                    }}
                                >
                                    Cuenta
                                </Link>
                                <Link to='/nosotros' className="navbar-item" 
                                    style={{marginLeft:'50px',
                                            color: '#535353',
                                            fontWeight: "bold",
                                            fontFamily: 'Tahoma'
                                    }}
                                >
                                    Nosotros
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bulma/css/bulma.css';
import { runInThisContext } from 'vm';

export default class Nosotros extends Component{
    render(){
        return(
            <section width='100%'>
                <section style={{
                                width:'70%',
                                float:'left'
                                }}
                >
                    <section style={{}}>
                        <img src='./img/editada.jpg' alt="editada" style={{width:"50%",float:"left",paddingLeft:"20px",paddingTop:"20px"}}/>
                        <section style={{width:"50%",float:"left", padding:"30px"}}>
                            <h1 style={{fontSize:"30px",float:"left",fontFamily:"Rubik",marginLeft:"30%"}}>NOSOTROS</h1>
                            <p style={{float:"left", textAlign:"center"}}>Somos un grupo de personas con un objetivo común: cuidar el medio ambiente. Es por eso que decidimos juntarnos y empezar el cambio, haciendo que gente como tú también pueda contribuir. De derecha a izquierda: Osvaldo, Humberto, Ricardo, Pedro y Judith.</p>
                        </section>
                    </section>
                    <section>
                        <section style={{width:"50%",float:"left", padding:"30px"}}>
                            <h1 style={{fontSize:"30px",float:"left",fontFamily:"Rubik",marginLeft:"30%"}}>OBJETIVO</h1>
                            <p style={{float:"left", textAlign:"center"}}>Empezamos éste proyecto con el objetivo que gente como tú pudiera contribuir, poner de su pizca de ayuda sobre este problema que día a día nos atormenta, unificarnos y ser más fuertes brindandote el medio necesario. Pero no podemos solos, por eso es que te hacemos la invitacion a participar en uPlant.</p>
                        </section>
                        <img src='./img/undraw_environment_iaus.png' alt="manita" style={{width:"50%",float:"left",paddingLeft:"20px",paddingTop:"20px"}} />
                    </section>
                    <section>
                        <h1 style={{width:"100%", fontSize:"30px",float:"left",fontFamily:"Rubik",marginLeft:"40%"}}>SIGUENOS</h1>
                        <section style={{width:"30%", marginLeft:"37%"}}>
                            <img src="./img/facebook-logo.png" style={{width:"10%", margin:"20px"}}/>
                            <img src="./img/instagram-logo.png" style={{width:"10%", margin:"20px"}}/>
                            <img src="./img/whatsapp-logo.png" style={{width:"10%", margin:"20px"}}/>
                        </section>
                    </section>
                    
                </section>
                <section style={{
                                width:'30%',
                                float:'right'
                                }}
                >
                    <section>
                        <h1 style={{width:"100%", fontSize:"30px",float:"left",fontFamily:"Rubik",marginLeft:"35%"}}>Galería</h1>
                        <Carousel>
                            <div>
                                <img src="./img/1.jpg" />
                            </div>
                            <div>
                                <img src="./img/2.jpg" />
                            </div>
                            <div>
                                <img src="./img/3.jpg" />
                            </div>
                            <div>
                                <img src="./img/5.jpg" />
                            </div>
                        </Carousel>                                
                    </section>
                    <section>
                        <h1 style={{width:"100%", fontSize:"30px",float:"left",fontFamily:"Rubik",marginLeft:"15%"}}>CONTACTANOS</h1>
                        <form>
                            <input type="textbox" placeholder="Nombre" style={{width:"45%", marginTop:"20px", float:"left"}}/>
                            <input type="textbox"  placeholder="Correo" style={{width:"45%", marginTop:"20px", float:"right"}}/>
                            <textarea placeholder="Mensaje" style={{width:"100%", height:"100px", marginTop:"20px"}}/>
                            <button type="sumbit">Enviar</button>
                        </form>
                    </section>
                </section>
            </section>
        )
    }
}
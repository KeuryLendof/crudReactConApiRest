import React from "react";
import '../App.css';
import Img from './img/pdf.png'
import Img2 from './img/perfil.png'



const Nomina=()=>{



    return(
        <div className="nomina">
            <section className="seccion-perfil-usuario">
                <div className="perfil-usuario-header">
                    <div className="perfil-usuario-portada">
                        <div className="perfil-usuario-avatar">
                            <img src={Img2} alt="img-avatar"/>
                        </div>
                    </div>
                </div>
                <div className="perfil-usuario-body">
                    <div className="perfil-usuario-bio">
                        <h3 className="titulo">Keury Alberto Lendof Diaz</h3>
                        {/* <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                    <div className="perfil-usuario-footer">
                        <h3 className="titulo"> Esta es su nomina</h3>
                    </div>
                    <div className="redes-sociales">
                        {/* <a href="" className="boton-redes facebook fab fa-download"><i className=""></i></a>
                        <a href="" className="boton-redes twitter fab fa-whatsapp"><i className=""></i></a>
                        <a href="" className="boton-redes instagram fab fa-instagram"><i className=""></i></a> */}
                        <a href="" className="boton-redes"> <img src={Img}/></a>
                    </div>
                </div>
                <br></br>
            </section>
        </div>
    )
}


export default Nomina;
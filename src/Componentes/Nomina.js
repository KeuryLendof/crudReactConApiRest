import React from "react";
import '../App.css';



const Nomina=()=>{



    return(
        <div className="nomina">
            <section className="seccion-perfil-usuario">
                <div className="perfil-usuario-header">
                    <div className="perfil-usuario-portada">
                        <div className="perfil-usuario-avatar">
                            {/* <img src="http://localhost/multimedia/relleno/img-c9.png" alt="img-avatar"/> */}
                            <button type="button" className="boton-avatar">
                                <i clasName="far fa-image"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="perfil-usuario-body">
                    <div className="perfil-usuario-bio">
                        <h3 className="titulo">Keury Alberto Lendof Diaz</h3>
                        <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="perfil-usuario-footer">
                        
                    </div>
                    <div className="redes-sociales">
                        <a href="" className="boton-redes facebook fab fa-facebook-f"><i className="icon-facebook"></i></a>
                        <a href="" className="boton-redes twitter fab fa-twitter"><i className="icon-twitter"></i></a>
                        <a href="" className="boton-redes instagram fab fa-instagram"><i className="icon-instagram"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Nomina;
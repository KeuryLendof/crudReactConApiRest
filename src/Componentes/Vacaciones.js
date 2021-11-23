import React from "react";
import '../App.css';


function Vacaciones(){



    return(
        <div className="revisarVacaciones">
            <section class="body-chat">
                <div class="seccion-titulo">
                    <h3>
                        <i class="fas fa-comments"></i>
                        Solicitudes de vacaciones
                    </h3>
                </div>
                <div class="panel-chat">
                    <div class="mensaje">
                        <div class="avatar">
                            <img src="ruta_img" alt="img"/>
                        </div>
                        <div class="cuerpo">
                            <div class="texto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                                <span class="tiempo">
                                    <i class="far fa-clock"></i>
                                    Hace 5 min
                                </span>
                            </div>
                            <ul class="opciones-msj">
                                <li>
                                    <button type="button">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i class="fas fa-share-square"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Vacaciones;

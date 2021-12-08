import React, { Component } from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from './img/pdf.png';
import Img2 from './img/perfil.png';

//const url = "https://nomina-empleado-api.azurewebsites.net/api/Payrolls";


class Nomina extends Component{

    constructor(props){
        super(props)
        this.state = {
            data:[],
            resultado:[],
            cedula: ''
        }
    }

    
    async componentDidMount(){
        //await this.LaApi()
    }

    LaApi = async ()=>{
        let bien = `${this.state.cedula}`
        //let res = await fetch(`https://nomina-empleado-api.azurewebsites.net/api/Payrolls/${this.state.cedula}`);
        let res = await fetch('https://nomina-empleado-api.azurewebsites.net/api/Payrolls');
        this.state.data = await res.json()

      
        this.state.resultado = this.state.data.find(cedula => cedula.identificationCard === bien)
        //console.log(this.state.resultado)
        
    } 
    
    limpiar(){
        document.getElementById("limpiar").value="0";
    }
    
    mostrar(){
        var contenedor = document.getElementById("estoyaqui");
        contenedor.style.display = "block";
        return true;
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        var jeje = this.state.cedula
        console.log(jeje)
        this.LaApi()
        setTimeout(this.mostrar, 3000)
        setTimeout(this.limpiar, 4000)
    }

    handleCedula = event =>{
        this.setState({
            cedula: event.target.value
        })
    }



    render(){
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
                            <div className="container">
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                        type="text"
                                        id="limpiar" 
                                        className="form-control"
                                        placeholder="Cedula"
                                        name="cedula"
                                        value={this.state.cedula}
                                        onChange = {this.handleCedula}
                                    />
                                    <br/>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div id="pdf" className="perfil-usuario-footer">
                            <h3 className="titulo"> Esta es su nomina</h3>
                            <div id="estoyaqui" className="table-responsive" style={{display:"none"}}>
                            <table>
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Cedula</th>
                                    <th>Nombre</th>
                                    <th>Dia de la nomina</th>
                                    <th>Salario Bruto</th>
                                    <th>AFP</th>
                                    <th>Secure</th>
                                    <th>Salario Neto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.state.resultado.id}</td>
                                    <td>{this.state.resultado.identificationCard}</td>
                                    <td>{this.state.resultado.nameEmployee}</td>
                                    <td>{this.state.resultado.datePayroll}</td>
                                    <td>{this.state.resultado.grossIncome}</td>
                                    <td>{this.state.resultado.afp}</td>
                                    <td>{this.state.resultado.secure}</td>
                                    <td>{this.state.resultado.netIncome}</td>
                                </tr> 
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="redes-sociales">
                            <a className="boton-redes"> <img src={Img}/></a>
                        </div>
                    </div>
                    <br></br>
                </section>
            </div>
        )
    }



    
}


export default Nomina;
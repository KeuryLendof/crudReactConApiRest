import React, { Component } from "react";
import axios from "axios";
import '../App.css';


const url = "https://nomina-empleado-api.azurewebsites.net/api/Payrolls";


class NominasEmpleados extends Component{

    state={
        data:[]
    }


    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        })
    } 
    
    componentDidMount(){
        this.peticionGet();
    }


    render(){


        return(
            <div className="App container">
                <h1 className="titulo">Nomina de todos los empleados</h1><br/>
                <br/>
                <div className="table-responsive">
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
                            {this.state.data.map(nominas=>{
                                return(
                                <tr>
                                    <td>{nominas.id}</td>
                                    <td>{nominas.identificationCard}</td>
                                    <td>{nominas.nameEmployee}</td>
                                    <td>{nominas.datePayroll}</td>
                                    <td>{nominas.grossIncome}</td>
                                    <td>{nominas.afp}</td>
                                    <td>{nominas.secure}</td>
                                    <td>{nominas.netIncome}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default NominasEmpleados;
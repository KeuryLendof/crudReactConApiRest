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
                <br/><br/>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Empleado Id</th>
                            <th>Dia de la nomina</th>
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
                                    <td>{nominas.idEmployee}</td>
                                    <td>{nominas.datePayroll}</td>
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
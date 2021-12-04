import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


const url = "https://nomina-empleado-api.azurewebsites.net/api/Payrolls";


class verNominas extends Component{

    state={
        data:[]
    }


    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
        
    } 
    
    componentDidMount(){
        this.peticionGet();
    }


    render(){
        return(
            <div>
                <div className="App container">
                    <div className="table-responsive">
                        <table className="">
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
                                {
                                    this.state.data.map(nominas=>{
                                        return(
                                        <tr>
                                            <td>{nominas.id}</td>
                                            <td>{nominas.idEmployee}</td>
                                            <td>{nominas.datePayroll}</td>
                                            <td>{nominas.afp}</td>
                                            <td>{nominas.secure}</td>
                                            <td>{nominas.netIcome}</td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default verNominas;
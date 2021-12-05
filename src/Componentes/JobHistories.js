import React, { Component } from "react";
import axios from "axios";
import '../App.css';

const url ="https://nomina-empleado-api.azurewebsites.net/api/JobHistories";

class JobHistories extends Component{

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
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Empleado ID</th>
                            <th>Dia de entrada</th>
                            <th>Dia de salida</th>
                            <th>Nombre</th>
                            <th>Cedula</th>
                            <th>Puesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.data.map(histories=>{
                                return(
                                <tr>
                                    <td>{histories.idJobHistory}</td>
                                    <td>{histories.idEmployee}</td>
                                    <td>{histories.entryDate}</td>
                                    <td>{histories.endDate}</td>
                                    <td>{histories.nameEmployee}</td>
                                    <td>{histories.identificationCard}</td>
                                    <td>{histories.roleEmployee}</td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default JobHistories;
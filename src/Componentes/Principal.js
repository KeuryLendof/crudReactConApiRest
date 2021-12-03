import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import swal from 'sweetalert';
import '../App.css';

const url ="https://nomina-empleado-api.azurewebsites.net/api/Employees/";

class Principal extends Component{

  state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      id: '',
      nameEmployee: '',
      identificationCard: '',
      dateOfBirth: '',
      roleEmployee: '',
      phoneNumber: '',
      email: '',
      hireDate: '',
      salary: '',
      tipoModal: ''
    }
  }

  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    
  } 

  peticionPost=async()=>{
    //delete this.state.form.id;
    swal("Good job!", "Empleado agregado correctamente!", "success");
    await axios.post(url, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  peticionPut=()=>{
    axios.put(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    })
  }

  peticionDelete=()=>{
    axios.delete(url+this.state.form.id).then(response=>{
      this.setState({modalEliminar: false});
      this.peticionGet();
    })
  }


  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }

  seleccionarEmpleado=(empleados)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: empleados.id,
        nameEmployee: empleados.nameEmployee,
        identificationCard: empleados.identificationCard,
        dateOfBirth: empleados.dateOfBirth,
        roleEmployee: empleados.roleEmployee,
        phoneNumber: empleados.phoneNumber,
        email: empleados.email,
        hireDate: empleados.hireDate,
        salary: empleados.salary
      }
    })
  }


  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  componentDidMount(){
    this.peticionGet();
  }


  render(){

    const{form}=this.state;

    return(

      <div>

        <br />
        <div className="App container">
      
          <button className="btn btn-primary btn-lg" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Empleado</button>
          <br />
          <br />
          <div className="table-responsive">
            <table className="">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>cedula</th>
                  <th>fechaNacimiento</th>
                  <th>Puesto</th>
                  <th>Telefono</th>
                  <th>Email</th>
                  <th>Fecha de contratacion</th>
                  <th>Salario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data.map(empleados=>{
                    return(
                      <tr>
                        <td>{empleados.id}</td>
                        <td>{empleados.nameEmployee}</td>
                        <td>{empleados.identificationCard}</td>
                        <td>{empleados.dateOfBirth}</td>
                        <td>{empleados.roleEmployee}</td>
                        <td>{empleados.phoneNumber}</td>
                        <td>{empleados.email}</td>
                        <td>{empleados.hireDate}</td>
                        <td>{empleados.salary}</td>
                        <td>
                          <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpleado(empleados); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>{"    "}
                          <button className="btn btn-danger"  onClick={()=>{this.seleccionarEmpleado(empleados); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
            </table>

            <Modal isOpen={this.state.modalInsertar}>
              {/* <ModalHeader style={{display: 'block'}}>
                <span style={{float: 'right'}}>x</span>
              </ModalHeader> */}
              <ModalBody>
                <div className="form-group">

                  <form>
                    <label htmlFor="id">Id</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nameEmploye">Nombre</label>
                    <input className="form-control" type="text" name="nameEmployee" id="nameEmployee" onChange={this.handleChange} value={form?form.nameEmployee: ''}/>
                    <br />
                    <label htmlFor="identificationCard">Cedula</label>
                    <input className="form-control" type="text" name="identificationCard" id="identificationCard" onChange={this.handleChange} value={form?form.identificationCard: ''}/>
                    <br />
                    <label htmlFor="dateOfBirth">FechaNacimiento</label>
                    <input className="form-control" type="date" name="dateOfBirth" id="dateOfBirth" onChange={this.handleChange} value={form?form.dateOfBirth:''}/>
                    <br />
                    <label htmlFor="roleEmployee">Puesto</label>
                    <input className="form-control" type="text" name="roleEmployee" id="roleEmployee" onChange={this.handleChange} value={form?form.roleEmployee: ''}/>
                    <br />
                    <br />
                    <label htmlFor="phoneNumber">Telefono</label>
                    <input className="form-control" type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Ejemplo: 849-785-0712" required onChange={this.handleChange} value={form?form.phoneNumber: ''}/>
                    <br />
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" onChange={this.handleChange} value={form?form.email: ''}/>
                    <br />
                    <label htmlFor="hireDate">hireDate</label>
                    <input className="form-control" type="date" name="hireDate" id="hireDate" onChange={this.handleChange} value={form?form.hireDate: ''}/>
                    <br />
                    <label htmlFor="salary">salary</label>
                    <input className="form-control" type="number" name="salary" id="salary" onChange={this.handleChange} value={form?form.salary: ''}/>
                  </form>
                  
                </div>           
              </ModalBody>
              <ModalFooter>
                {this.state.tipoModal=='insertar'?
                  <button type="submit" className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                }
                <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
              </ModalFooter>
      
            </Modal>

            <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                Estas seguro de que quieres eliminar a {form && form.nameEmployee}
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Si</button>
                <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
              </ModalFooter>
            </Modal>



          </div>
        </div>
      </div>
    );
  }
  
}

export default Principal;

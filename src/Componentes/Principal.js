import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import swal from 'sweetalert';
import '../App.css';

const url ="http://localhost:3001/empleados/";

class Principal extends Component{

  state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      id: '',
      nombre: '',
      apellido: '',
      edad: '',
      Direccion: '',
      correo: '',
      puesto: '',
      salario: '',
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
        nombre: empleados.nombre,
        apellido: empleados.apellido,
        edad: empleados.edad,
        Direccion: empleados.Direccion,
        correo: empleados.correo,
        puesto: empleados.puesto,
        salario: empleados.salario
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
          <br /><br />
          <div className="table-responsive">
            <table className="">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Direccion</th>
                  <th>Correo</th>
                  <th>Puesto</th>
                  <th>Salario $</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data.map(empleados=>{
                    return(
                      <tr>
                        <td>{empleados.id}</td>
                        <td>{empleados.nombre}</td>
                        <td>{empleados.apellido}</td>
                        <td>{empleados.edad}</td>
                        <td>{empleados.Direccion}</td>
                        <td>{empleados.correo}</td>
                        <td>{empleados.puesto}</td>
                        <td>{empleados.salario}</td>
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
                  <label htmlFor="id">Id</label>
                  <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                  <br />
                  <label htmlFor="nombre">Nombre</label>
                  <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                  <br />
                  <label htmlFor="apellido">Apellido</label>
                  <input className="form-control" type="text" name="apellido" id="apellido" onChange={this.handleChange} value={form?form.apellido: ''}/>
                  <br />
                  <label htmlFor="edad">Edad</label>
                  <input className="form-control" type="text" name="edad" id="edad" onChange={this.handleChange} value={form?form.edad:''}/>
                  <br />
                  <label htmlFor="Direccion">Direccion</label>
                  <input className="form-control" type="text" name="Direccion" id="Direccion" onChange={this.handleChange} value={form?form.Direccion: ''}/>
                  <br />
                  <label htmlFor="correo">Correo</label>
                  <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form?form.correo: ''}/>
                  <br />
                  <label htmlFor="puesto">Puesto</label>
                  <input className="form-control" type="text" name="puesto" id="puesto" onChange={this.handleChange} value={form?form.puesto: ''}/>
                  <br />
                  <label htmlFor="salario">Salario</label>
                  <input className="form-control" type="text" name="salario" id="salario" onChange={this.handleChange} value={form?form.salario: ''}/>
                </div>           
              </ModalBody>
              <ModalFooter>
                {this.state.tipoModal=='insertar'?
                  <button className="btn btn-success" onClick={()=>this.peticionPost()}>
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
                Estas seguro de que quieres eliminar a {form && form.nombre}
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

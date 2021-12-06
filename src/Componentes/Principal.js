import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import swal from 'sweetalert';
import '../App.css';

import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const url ="https://nomina-empleado-api.azurewebsites.net/api/Employees/";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
      <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
          '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      />
  );
});
TextMaskCustom.propTypes = {
name: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};

const TextMaskCedula = React.forwardRef(function TextMaskCedula(props, ref) {
  const { onChange, ...other } = props;
  return (
      <IMaskInput
      {...other}
      mask="#00-0000000-0"
      definitions={{
          '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      />
  );
});
TextMaskCedula.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
name: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};




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
      tipoModal: '',
      textmask: '',
      numberformat: '',
      cedulamask: ''
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
    delete this.state.form.id;
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
    //e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    //console.log(this.state.form)
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
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="nameEmployee"
                      id="nameEmployee" 
                      type="text" 
                      label="Nombre"
                      variant="standard"
                      onChange={this.handleChange}
                      value={form?form.nameEmployee: ''}
                    />
                    <br/>
                    <FormControl variant="standard">
                      <InputLabel htmlFor="formatted-text-mask-input">Cedula</InputLabel>
                      <Input
                        onChange={this.handleChange}
                        value={form?form.identificationCard:''}
                        name="identificationCard"
                        id="identificationCard"
                        inputComponent={TextMaskCedula}
                      />
                    </FormControl>
                    <br/>
                    <TextField 
                      name="dateOfBirth" 
                      id="dateOfBirth" 
                      label=" " 
                      variant="standard" 
                      type="date"
                      onChange={this.handleChange} 
                      value={form?form.dateOfBirth:''}/>
                    <br/>
                    <TextField 
                      name="roleEmployee" 
                      id="roleEmployee" 
                      label="Puesto" 
                      variant="standard"
                      onChange={this.handleChange}
                      value={form?form.roleEmployee: ''} />
                    <br/>
                    <FormControl variant="standard">
                      <InputLabel htmlFor="formatted-text-mask-input">Telefono</InputLabel>
                      <Input
                        value={form?form.phoneNumber:''}
                        onChange={this.handleChange}
                        name="phoneNumber"
                        id="phoneNumber"
                        inputComponent={TextMaskCustom}
                      />
                    </FormControl>
                    <br/>
                    <TextField 
                      name="email" 
                      id="email" 
                      label="Email" 
                      variant="standard" 
                      type="email"
                      onChange={this.handleChange} 
                      value={form?form.email: ''}
                    />
                    <br/>
                    <TextField 
                      name="hireDate" 
                      id="hireDate" 
                      label=" " 
                      variant="standard" 
                      type="date"
                      onChange={this.handleChange}
                      value={form?form.hireDate: ''}/>
                    <br/>
                    <TextField
                      label="Salario"
                      value={form?form.salary:''}
                      onChange={this.handleChange}
                      name="salary"
                      id="salary"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                      variant="standard"
                    />
            
                  </Box>
                  
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

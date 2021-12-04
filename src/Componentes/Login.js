import React, {Component} from "react";
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../App.css'
import logo from './img/login.svg'

const baseUrl = "https://nomina-empleado-api.azurewebsites.net/api/Admins";
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            users: '',
            pass: ''
        }
    }

    handleChange =async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.form)
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {users: this.state.form.users, pass: this.state.form.pass}})
        .then(response=>{
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('idAdmin', respuesta.id, {path: "/"})
                cookies.set('users', respuesta.users, {path: "/"})
                cookies.set('pass', respuesta.pass, {path: "/"})
                window.location.href="/inicio";

            }else{
                alert("Usuario o contrasena incorrecto")
            }
        })
    }

    render(){

        return(
            <div className="login">

                <div className="login-container">
                    <div className="login-info-container">
                        <br /><br /><br /><br />
                        <h1 className="title">Log in with</h1>
                        <br />
                        <form className="inputs-container">
                            <input className="input" type="text" placeholder="Username" name="users" onChange={this.handleChange}/>
                            <input className="input" type="password" placeholder="Password" name="pass" onChange={this.handleChange}/>
                            <button className="btnl" onClick={()=> this.iniciarSesion()}>login</button>
                        </form>
                    </div>
                    <img className="image-container" src={logo}/>
                </div>

            </div>
        );

    }


}



export default Login;
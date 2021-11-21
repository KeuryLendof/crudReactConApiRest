import React, {Component} from "react";
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../App.css'
import logo from './img/login.svg'

const baseUrl = "http://localhost:3001/administradores";
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            username: '',
            password: ''
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
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        .then(response=>{
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"})
                cookies.set('username', respuesta.username, {path: "/"})
                cookies.set('password', respuesta.password, {path: "/"})
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
                            <input className="input" type="text" placeholder="Username" name="username" onChange={this.handleChange}/>
                            <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
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
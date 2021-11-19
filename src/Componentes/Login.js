import React, {Component} from "react";
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../App.css'

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
                alert(`Bienvenido ${respuesta.username}`)
                window.location.href="./vacaciones";

            }else{
                alert("Usuario o contrasena incorrecto")
            }
        })
    }

    render(){

        return(
            <div className="login">
                <div className="center">
                    <h1>Login</h1>
                    <form>
                        <div className="txt_field">
                            <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            required />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            required  />
                            <label>Password</label>
                        </div>
                        <button className="enviar" onClick={()=> this.iniciarSesion()}>Login</button>
                    </form>
               </div>
            </div>
            
        );

    }


}



export default Login;
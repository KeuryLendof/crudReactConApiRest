import React, {Component} from "react";
import axios from 'axios'
import '../App.css'
import logo from './img/login.svg'

const baseUrl = "https://nomina-empleado-api.azurewebsites.net/api/Admins/";

class Login extends Component {

    state={
        form:{
            users: "",
            pass: ""
        },
        error:false,
        errorMsg:"Error de prueba"
    }

    manejadorSubmit = e =>{
        e.preventDefault();
    }

    manejadorChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    manejadorBoton=async()=>{
        await axios.get(baseUrl,{params: {users: this.state.form.users, pass: this.state.form.pass}})
        .then( response=>{
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                window.location.href="/inicio";
            }
        })
    }


    render(){

        return(
            <React.Fragment>
                <div className="login">

                    <div className="login-container">
                        <div className="login-info-container">
                            <br /><br /><br /><br />
                            <h1 className="title">Log in with</h1>
                            <br />
                            <form className="inputs-container" onSubmit={this.manejadorSubmit}>
                                <input className="input" type="text" placeholder="Username" name="users" onChange={this.manejadorChange}/>
                                <input className="input" type="password" placeholder="Password" name="pass" onChange={this.manejadorChange}/>
                                <button className="btnl" type="submit" onClick={this.manejadorBoton}>login</button>
                            </form>
                            {this.state.error === true &&
                                <div className="alert alert-danger" role="alert">
                                    {this.state.errorMsg}
                                </div>
                            }
                        </div>
                        <img className="image-container" src={logo}/>
                    </div>

                </div>
            </React.Fragment>
        );

    }


}



export default Login;
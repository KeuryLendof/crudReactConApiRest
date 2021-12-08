import React, {Component} from "react";
import '../App.css'
import swal from 'sweetalert';
import logo from './img/login.svg'

//const baseUrl = "https://nomina-empleado-api.azurewebsites.net/api/Admins";

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:[],
            resultado:[],
            form:{
                users: '',
                pass: ''
            }
        }
    }

    LaApi=async()=>{
        let user = `${this.state.form.users}`
        let pas = `${this.state.form.pass}`

        let res = await fetch('https://nomina-empleado-api.azurewebsites.net/api/Admins')
        this.state.data = await res.json()

        if(this.state.data.find(users => users.users === user)){
            if(this.state.data.find(pass => pass.pass === pas)){
                //alert(`Bien hecho ${user}`)
                window.location.href="./inicio";
            }else{
                swal ( "Oops" ,  "Usuario o contraseña incorrectos!" ,  "error" )
            }
        }else{
            swal ( "Oops" ,  "Usuario o contraseña incorrectos!" ,  "error" )
        }

        //console.log(this.state.data)
    }

    manejadorSubmit = e =>{
        e.preventDefault();
        var usuario = this.state.form.users
        var contrasena = this.state.form.pass
        this.LaApi()
    }

    handleChange=async e=>{
        //e.persist();
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.form)
      }

    async componentDidMount(){
        //await this.LaApi()
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
                                <input className="input" type="text" placeholder="Username" id="users" name="users" onChange={this.handleChange}/>
                                <input className="input" type="password" placeholder="Password" id="pass" name="pass" onChange={this.handleChange}/>
                                <button className="btnl" type="submit">login</button>
                            </form>
                        </div>
                        <img className="image-container" src={logo}/>
                    </div>

                </div>
            </React.Fragment>
        );

    }


}



export default Login;
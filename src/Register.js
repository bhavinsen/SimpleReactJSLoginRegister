import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import { RadioButton } from 'material-ui';
import Login from './Login'

class Register extends Component {
    
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }
    
    handleClick = event => {
        const apiBaseUrl = 'http://localhost:4000/api/'

        console.log("values", this.state.firstname, this.state.lastname, this.state.email, this.state.password)

        const payload = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "email": this.state.email,
            "password": this.state.password,
        }

        axios.post(apiBaseUrl+'/register', payload)
             .then(function(response){
                 if(response.data.code == 200){
                     var loginscreen = []
                     loginscreen.push(<Login parentContext={this} />)
                     var loginmessage = "Not Registered yet. Go to registration"
                     this.props.parentContext.setState({
                         loginscreen: loginscreen,
                         buttonLabel: "Register",
                         isLogin: true
                     });                    
                 }
             })
             .catch(function(error){
                console.log(error)
             });
    }

    render() {
        const style = {
            margin: 15
        }
        return (
        <div>
            <MultiThemeProvider>
               <div>
                   <AppBar
                       title="Register"
                   />
                   <TextField
                       hintText="Enetr your First Name"
                       floatingLabelText="First Name"
                       onChange={(event, newValue) => this.setState({firstname: newValue})}
                   />
                   <br />
                   <TextField
                       hintText="Enter your Last Name"
                       floatingLabelText="Last Name"
                       onChange={(event, newValue) => this.setState({lastname: newValue})}
                   />
                    <br/>
                    <TextField
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => this.setState({email: newValue})}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.setState({password: newValue})}
                    />
                    <br/>
                    <RaisedButton
                        label="Submit" 
                        primary={true}
                        style={style}
                        onClick={this.handleClick}
                    />
               </div>
            </MultiThemeProvider>
        </div>
      )
    }
}

export default Register

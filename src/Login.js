import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton, { RadioButton } from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import style from 'material-ui/svg-icons/image/style';
import axios from 'axios'

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        } 
    }
    
    handleClick = event => {
        const appBaseUrl = "http://localhost:4000/api/"
        const payload = {
            "email" : this.state.username,
            "password": this.state.password,
        }
        
        axios.post(appBaseUrl+'login', payload)
             .then(function(response){
                console.log(response)
                if(response.data.code == 200){
                    console.log("Login successfull")
                    const uploadScreen = []
                    uploadScreen.push(<uploadScreen appContext={this.props.appContext} />)
                    this.props.appContext.setState({loginPage: [], uploadScreen : uploadScreen})                    
                }else if(response.data.code == 204){
                    console.log("Username and password do not match")
                    alert("Username and password does not match")
                }else {
                    console.log('Username does not exits')
                }
             }).catch(function(error){
                console.log(error) 
             });        
    };

    render() {
        const style = {margin:15,}
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar 
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
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
                </MuiThemeProvider>
            </div>
        )
    }
} 

export default Login;
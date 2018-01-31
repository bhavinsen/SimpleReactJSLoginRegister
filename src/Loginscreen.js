import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import Login from './Login'
import Register from './Register'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton } from 'material-ui';

class Loginscreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Register',
            isLogin: true
        }    
    }
    
    componentWillMount(){
        const loginscreen = []
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />)
        const loginmessage = "Not registered yet, Register Now"
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        })
    }

    handleClick = (event) => {
        var loginmessage = ''
        if(this.state.isLogin){
            const loginscreen = []
            loginscreen.push(<Register parentContext={this}/>)
            loginmessage = "Already registered. Go to Login"
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Login",
                isLogin: false,
            })
        }else{
            const loginscreen = []
            loginscreen.push(<Login parentContext={this} />)
            loginmessage = "Not Registered yet. Go to registration."
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true,
            })
        }

    }

    render() {
        const style = {
            margin: 15
        }
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton 
                                label={this.state.buttonLabel}
                                primary={true}
                                style={style}
                                onClick={this.handleClick}
                            />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>                
        )
    }

}

export default Loginscreen;
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'


import logo from './logo.svg';
import './App.css';
import Loginscreen from './Loginscreen'

injectTapEventPlugin()
class App extends Component {

  constructor(props){
     super(props)
     this.state = {
       loginPage: [],
       uploadScreen: []
     }
  }
  
  componentWillMount(){
    const loginPage = []
    loginPage.push(<Loginscreen parentContext={this}/>)
    this.setState({
      loginPage: loginPage
    })
  }

  render() {
    return (
      <div className="App">
         {this.state.loginPage}
         {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;

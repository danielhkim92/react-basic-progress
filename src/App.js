import React, { Component } from 'react';
// import { Button, Card, Row, Col } from 'react-materialize';
import Login from './Login/Login.js';




class App extends Component {
      constructor(){
    //super initializes the keyword this
    super();
    this.state = {
      username: "", 
      isLoggedIn: false,

    }
  }

  login = (username) => {
    const state = this.state;
    state.username = username;
    state.isLoggedIn = true;
    console.log(state.username)
    this.setState(state);
  }



  render() {
    return (
      <div className='container'>
        {this.state.isLoggedIn ? <h1>Hello this is my app</h1>  : <Login login={this.login}/>}

      
      </div>
    );
  }
}

export default App;

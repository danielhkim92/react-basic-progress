import React, { Component } from 'react';
// import { Button, Card, Row, Col } from 'react-materialize';
import Login from './Login/Login.js';
import Homepage from './Homepage/Homepage.js';




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
        {this.state.isLoggedIn ? <Homepage username={this.state.username}/>  : <Login login={this.login}/>}

      
      </div>
    );
  }
}

export default App;


        // {this.state.isLoggedIn ? <Homepage/>  : <Login login={this.login}/>}


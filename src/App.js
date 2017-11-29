import React, { Component } from 'react';
import Login from './Login.js';


import './App.css';

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
      <div>
              {this.state.isLoggedIn ? <h1>Hello this is my app</h1>  : <Login login={this.login}/>
        }

      
      </div>
    );
  }
}

export default App;

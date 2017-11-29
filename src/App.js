import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
      constructor(){
    //super initializes the keyword this
    super();
    this.state = {
      username: "",
      movies: ['Up' ,'Finding Nemo', 'Heavyweights', 'Alladin'],
      editedItem: '',
      isLoggedIn: false,
      showEdit: false
    }
  }

  login = (username) => {
    const state = this.state;
    state.username = username;
    state.isLoggedIn = true;
    this.setState(state);
  }



  render() {
    return (
      <div>
      <Login login={this.login}/>
      <h1>Hello this is my app</h1>
      </div>
    );
  }
}

export default App;

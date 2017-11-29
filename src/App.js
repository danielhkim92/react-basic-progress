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

  deleteItem = (movie) => {
    console.log(movie);
    const state = this.state;
    const index = state.movies.indexOf(movie);
    state.movies.splice(index, 1); 
    this.setState(state);

  }

  showEdit = (editedMovie) => {
    const state = this.state;
     
    state.editedItem = editedMovie;
    this.setState(state);
  }

  editMovie = (movie) => {
    const index = this.state.movies.indexOf(this.state.editedItem);
    const state = this.state;
    state.movies[index] = movie;
    state.showEdit = !state.showEdit
    this.setState(state);
    //which movie is being edited, the movie we are changing into
    console.log(movie)
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

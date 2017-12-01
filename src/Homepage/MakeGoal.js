import React, { Component } from 'react';

class MakeGoal extends Component {
	constructor(){
    //super initializes the keyword this
    super();
    this.state = {
    	goalTitle: "",
    	goalSummary: ""
    }
  }
	handleSubmit = (e) => {
		console.log('hello')
	}
	render() {
		return (
			<div>
				<h3>Create a Goal</h3>
				<form>
					<label>Goal Title</label><input type='text' value="goalTitle"></input>
					<label>Summary of Goal</label><input type='text' value="goalSummary"></input>
					<button onClick={this.handleSubmit} className="waves-effect waves-light btn">Create Goal</button>
				</form>
			</div>
	)}
}
export default MakeGoal; 
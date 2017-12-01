import React, { Component } from 'react';

class MakeGoal extends Component {
	handleSubmit = (e) => {
		console.log('hello')
	}
	render() {
		return (
			<div>
				<h3>Create a Goal</h3>
				<form onKeyPress=>
					<label>Goal Title</label><input type='text'></input>
					<label>Summary of Goal</label><input type='text'></input>
				</form>
			</div>
	)}
}
export default MakeGoal;
import React, { Component } from 'react';

class GoalForm extends Component {
	constructor(){
		super();
		this.state  = {
			step: "",
			description: "",
		}
	}
	handleStep = (e) = {
		this.setState(this.state.step: event.target.value)

	}

	handleDescription = (e) = {
		this.setState(this.state.description: event.target.value)
	}

	handleSubmit = (e) => {
		console.log('the first step has been submitted')
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Make the first step!:</label>
					<input type='text' onChange={this.handleStep} placeholder="Enroll into General Assembly"/>
					<label>Description of first step!:</label>
					<input type ='text' placeholder="Figure out how can I afford this??"/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
			)
	}
}

export default GoalForm;
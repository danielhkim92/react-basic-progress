import React, { Component } from 'react';

class GoalForm extends Component {
	constructor(){
		super();
		this.state  = {
			step: "",
			description: "",
		}
	this.handleStep = this.handleStep.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
  handleStep(event) {
    this.setState({step: event.target.value});
  }

	handleDescription = (e) = {
		this.setState(this.state.description: event.target.value)
	}

	handleSubmit = (e) => {
		console.log('the first step has been submitted', this.state)
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Make the first step!:</label>
					<input type='text' onChange={this.handleStep} placeholder="Enroll into General Assembly"/>
					<label>Description of first step!:</label>
					<input type ='text' onChange={this.handleDescription} placeholder="Figure out how can I afford this??"/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
			)
	}
}

export default GoalForm;
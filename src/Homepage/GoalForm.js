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

 	handleDescription(event) {
    this.setState({description: event.target.value});
  	}

	handleSubmit = (e) => {
		this.props.grabbingSteps(this.state.step, this.state.description);
		
	}
	render(){
	
		return(
			<div>
			<h3>Steps to Finishing</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Make A Step:</label>
					<input type='text' onChange={this.handleStep} placeholder="Enroll into General Assembly"/>
					<label>Description of Step!:</label>
					<input type ='text' onChange={this.handleDescription} placeholder="Figure out how can I afford this??"/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
			)
	}
}

export default GoalForm;
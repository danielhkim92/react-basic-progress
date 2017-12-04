import React, { Component } from 'react';

class GoalForm extends Component {
	constructor(){
		super();
		this.state  = {

		}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Make the first step!:</label>
					<input type='text' placeholder="Enroll into General Assembly"/>
					<label>Description of first step!:</label>
					<input type ='text' placeholder="Figure out how can I afford this??"/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
			)
	}
}

export default GoalForm;
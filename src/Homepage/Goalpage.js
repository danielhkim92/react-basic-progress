import React, { Component } from 'react';
import GoalForm from "./GoalForm";

class Goalpage extends Component {
	constructor(props){
		super();
		this.state = {
			steps: []
			

		}
	}

	grabbingSteps = (step, description) => {
		const state = this.state;
		state.steps.push({step: step, description: description})
		state.description = description;
		this.setState(state)
		console.log(state.steps)
	}
	render(){
		const goals = this.props.goals;
		const bam = this.props.currentGoal
		const stepsToCompletion = this.state.steps.map((x, i) => {
			return <div key={i}>
						<li>{x.step}</li>
						<label>Description</label><p>{x.description}</p>
						<div className="switch">
						<label>
						    Not Finished
						    <input type="checkbox"/>
						    <span className="lever"></span>
						    Finished
						</label>
					</div>
					</div>

		})


		
	

		

		return(
			<div>
				<h3>This is the {this.props.currentGoal.toUpperCase()} Page</h3>
					<div className="switch">
						<label>
						    Not Finished
						    <input type="checkbox"/>
						    <span className="lever"></span>
						    Finished
						</label>
					</div>
				<ol>
				{stepsToCompletion}
				</ol>
				<GoalForm grabbingSteps={this.grabbingSteps}/>

			</div>
			)
	}
}

export default Goalpage;
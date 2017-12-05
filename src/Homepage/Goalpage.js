import React, { Component } from 'react';
import GoalForm from "./GoalForm";

class Goalpage extends Component {
	constructor(props){
		super();
		this.state = {
			steps: [{step: "", description: ""}]
			

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
					<ol>
						<li>{x.step}</li>
					<li>{x.description}</li>
					</ol>
					</div>

		})

		for(let i = 0; i < goals.length; i++){
			if (goals[i].goalTitles === bam) {
    			const summary = goals[i].Summaries;
    			
   			}
		}
		
	

		

		return(
			<div>
				<h3>This is the {this.props.currentGoal.toUpperCase()} Page</h3>
				<ol>
				{stepsToCompletion}
				</ol>
				<GoalForm grabbingSteps={this.grabbingSteps}/>

			</div>
			)
	}
}

export default Goalpage;
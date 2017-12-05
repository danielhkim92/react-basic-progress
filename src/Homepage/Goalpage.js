import React, { Component } from 'react';
import GoalForm from "./GoalForm";

class Goalpage extends Component {
	constructor(props){
		super();
		this.state = {
			steps: [],
			isStrikeThrough: false
			

		}
	}

	grabbingSteps = (step, description) => {
		const state = this.state;
		state.steps.push({step: step, description: description})
		state.description = description;
		this.setState(state)
		console.log(state.steps)
	}

	toggle = (e) => {
		this.setState({isStrikeThrough: !this.state.isStrikeThrough})
		console.log(this.state.isStrikeThrough)
		if(this.state.isStrikeThrough === true){
			console.log('its TRUE baby')
		}
	}
	render(){
		const style = {
		  	textDecoration: 'line-through'

  		};

		const stepsToCompletion = this.state.steps.map((x, i) => {
			return <div key={i}>
						<li>{x.step}</li>
							<ol>
							<li>{x.description}</li>
							</ol>
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
					<div className="switch">
						<label>
						    Not Finished
						    <input onClick={this.toggle} type="checkbox"/>
						    <span className="lever"></span>
						    Finished
						</label>
					</div>
				<h3>This is the {this.props.currentGoal.toUpperCase()} Page</h3>
					
				<ol type="I">
				{stepsToCompletion}
				</ol>
				<GoalForm grabbingSteps={this.grabbingSteps}/>

			</div>
			)
	}
}

export default Goalpage;
import React, { Component } from 'react';
import MakeGoal from "./MakeGoal";
import GoalForm from "./GoalForm";
import Goalpage from "./Goalpage";


class Homepage extends Component {
	constructor(){
		super()
		this.state = {
			goalPicked: false,
			goals: [{goalTitles: "Start", goalSummaries: "THIS IS ONLY THE BEGINNING"}, 
			{goalTitles: "Second Goal", goalSummaries: "I CANT WAIT TO GET THIS WORKING!"}]

		}
	}
	
	grabbingGoals = (goalTitle, goalSummary) => {

		const state =  this.state;
		state.goals.push({goalTitles: goalTitle, goalSummaries: goalSummary})
		this.setState(state);

	}

	grabbingSteps = (step, description) => {
		const state = this.state;
		state.steps = step;
		state.description = description;
		this.setState(state)


	}



	render() {
		const goalTitle = this.state.goals.map((x, i) => {
			return <li key={i} className="tab"><a href={`#${x.goalTitles}`}>{x.goalTitles}</a></li>})

		const goalSummary = this.state.goals.map((x, i)=> {
			return <div className="center-align" id={`${x.goalTitles}`}><h4>{x.goalSummaries}</h4><GoalForm grabbingSteps={this.grabbingSteps}/></div>
		})
		return (
			<div className='row'>

			<h1>Home Page</h1>
		
				<div className="card">
				    <div className="card-content">
		<MakeGoal grabbingGoals={this.grabbingGoals}/>
				    </div>
				    <div className="card-tabs">
				      <ul className="tabs tabs-fixed-width">
				        
				        {goalTitle}
				     	
				      </ul>
				    </div>
				</div>
  			</div>


		)
	}
}
export default Homepage;




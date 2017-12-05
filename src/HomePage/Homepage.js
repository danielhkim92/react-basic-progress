import React, { Component } from 'react';
import MakeGoal from "./MakeGoal";
import Goalpage from "./Goalpage";


class Homepage extends Component {
	constructor(){
		super()
		this.state = {
			currentGoal: "",
			goalPicked: false,
			goals: [{goalTitles: "start", goalSummaries: "THIS IS ONLY THE BEGINNING"}, 
			{goalTitles: "second goal", goalSummaries: "I CANT WAIT TO GET THIS WORKING!"}]

		}
	}
	
	grabbingGoals = (goalTitle, goalSummary) => {

		const state =  this.state;
		state.goals.push({goalTitles: goalTitle, goalSummaries: goalSummary})
		this.setState(state);

	}

	showSteps = (e) => {
		
		this.state.currentGoal = e.target.innerText.toLowerCase();
		this.setState(this.state)
		console.log(this.state.currentGoal)
	}

	showGoal = (e) => {
		
		this.state.goalPicked = true;
		this.setState(this.state)
		console.log(this.state.goalPicked + "pelase be true")
	}



	


	render() {

		const goalTitle = this.state.goals.map((x, i) => {
			return <li onClick={this.showSteps} key={i} className="tab"><a onClick={this.showGoal} href={`#${x.goalTitles}`}>{x.goalTitles}</a></li>})


		return (
			<div className='row'>
			<h1>Home Page</h1>
			<MakeGoal grabbingGoals={this.grabbingGoals}/>
				<div className="card">
				    <div className="card-content">
		
				    </div>
				    <div className="card-tabs">
				      <ul className="tabs tabs-fixed-width">
				        
				        {goalTitle}
				     	
				      </ul>
				    </div>
				</div>
				{this.state.goalPicked ? <Goalpage currentGoal={this.state.currentGoal} goals={this.state.goals}/> : <h1>Right now I'm false</h1>}
  			</div>


		)
	}
}
export default Homepage;




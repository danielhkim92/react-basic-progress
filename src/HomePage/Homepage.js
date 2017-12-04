import React, { Component } from 'react';
import MakeGoal from "./MakeGoal"



class Homepage extends Component {
	constructor(){
		super()
		this.state = {
			goals: [{goalTitles: "animals", goalSummaries: "great"}, {goalTitles: "dragons", goalSummaries: "great"}],

		}
	}
	
	grabbingGoals = (goalTitle, goalSummary) => {

		const state =  this.state;

		console.log(state.goals[0].goalTitles);
		this.setState(state);

	}



	render() {
		const goalTitle = this.state.goals.map((x, i) => {
			return <li key={i} className="tab"><a href={`#${x.goalTitles}`}>{x.goalTitles}</a></li>})
		const goalSummary = this.state.goals.map((x, i)=> {
			return <div key={i} id={x.goalTitles}>{x.goalSummary}</div>
		})
		return (
			<div className='row'>
				<h1>Home Page</h1>
				<div className="card">
				    <div className="card-content">
				      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
				    </div>
				    <div className="card-tabs">
				      <ul className="tabs tabs-fixed-width">
				        <li className="tab"><a href="#test4">Create Goal</a></li>
				        {goalTitle}
				     	<li className="tab"><a href='#test5'>Goal 1</a></li>
				      </ul>
				    </div>
				    <div id="test4"><MakeGoal grabbingGoals={this.grabbingGoals}/></div>
				    <div id="test5">OMG THIS IS GOING TO BE A GOAL</div>

				</div>
  			</div>
		)
	}
}
export default Homepage;
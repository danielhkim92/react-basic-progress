import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import GoalForm from "./GoalForm";

class Goalpage extends Component {
	constructor(props){
		super();
		this.state = {
			currentGoal: '',
			steps: [],
			isStrikeThrough: false
			

		}
	}

	grabbingSteps = (step, description) => {
		const state = this.state;
		state.currentGoal = this.props.currentGoal
		state.steps.push({step: step, description: description, completed: false})
		this.setState(state)
		console.log(state)
	}



	toggle = (e) => {
		this.setState({isStrikeThrough: !this.state.isStrikeThrough})
		console.log(this.state.isStrikeThrough)
		if(this.state.isStrikeThrough === true){
			console.log('its TRUE baby')
		}
	}
	render(){



		const stepsToCompletion = this.state.steps.map((x, i) => {


			if(this.state.currentGoal === this.props.currentGoal){
				return <div className="container" key={i}>
					
							<div className="card blue-grey darken-1">
								<div className="card-content white-text">
									<div className="switch center-align">
										<label>
										    Not Finished
										    <input type="checkbox"/>
										    <span className="lever"></span>
										    Finished
										</label>
									</div>
										
											<span className="card-title"><li className="center-align">{x.step}</li></span>
										<ul>	
												<li className="center-align">{x.description}</li>
										</ul>
								</div>
							</div>

						</div>			
				}else{
					console.log('nada')
				}
		})
		return(
				<div>
				
				
						<div className="row card blue-grey darken-1 white-text">

							<div className="switch center-align">
								<label>
								    Not Finished
								    <input onClick={this.toggle} type="checkbox"/>
								    <span className="lever"></span>
								    Finished
								</label>
							</div>
								<h3 className="center-align">{this.props.currentGoal.toUpperCase()} Goal</h3>
						</div>
					<div className="row">
						<ol className="center-align" type="I">
							{stepsToCompletion}
						</ol>
					</div>
				<GoalForm className="row" grabbingSteps={this.grabbingSteps}/>
		
				</div>
		)
	}
}

export default Goalpage;



					// const style = {
		  	// 			textDecoration: 'line-through'
  			// 		};
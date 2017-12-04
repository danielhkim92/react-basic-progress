import React, { Component } from 'react';
import MakeGoal from "./MakeGoal"



class Homepage extends Component {
	toggleLine = (e) => {
		console.log("hi you doing this")
	}


	render() {
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
				        <li className="tab"><a href="#test5">Goal 1</a></li>
				        <li className="tab"><a href="#test6">Goal 2</a></li>
				      </ul>
				    </div>
				    <div id="test4"><MakeGoal/></div>x
				</div>
  			</div>
		)
	}
}
export default Homepage;
import React, { Component } from 'react';
import MakeGoal from "./MakeGoal"



class Homepage extends Component {
	


	render() {
		return (

			<div className='row'>
				<h1>Home Page</h1>
				<MakeGoal/>
				  <div className="card">
				    <div className="card-content">
				      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
				    </div>
				    <div className="card-tabs">
				      <ul className="tabs tabs-fixed-width">
				        <li className="tab"><a href="#test4">Test 1</a></li>
				        <li className="tab"><a class="active" href="#test5">Test 2</a></li>
				        <li className="tab"><a href="#test6">Test 3</a></li>
				      </ul>
				    </div>
				    <div className="card-content grey lighten-4">
				    	<div id="test4">					 
							<div className="switch">
    							<label>Not Completed
    								<input type="checkbox"/>
    								<span className="lever"></span>
    								Completed</label>
  							</div>	
						<div className="row">
        					<div className="col s12 m6">
          						<div className="card blue-grey darken-1">
            						<div className="card-content white-text">
              							<span className="card-title">The First Step</span>
              								<p>I am a very simple card. I am good at containing small bits of information.
              								I am convenient because I require little markup to use effectively.</p>
            						</div>
            							<div className="card-action">
              								<a href="#">This is a link</a>
              								<a href="#">This is a link</a>
            							</div>
          							</div>
        					</div>
      					</div>
						</div>
     				 	<div id="test5">
							<div className="switch">
    							<label>Not Completed
	    							<input type="checkbox"/>
	    							<span className="lever"></span>
	    							Completed</label>
  							</div>	
  							<div className="row">
        						<div className="col s12 m6">
          							<div className="card blue-grey darken-1">
            							<div className="card-content white-text">
							            	<span className="card-title">The Second Step</span>
							            		<p>WHAT DO I NEED TO DO??????.</p>
            							</div>
            							<div className="card-action">
							            	<a href="#">This is a link</a>
							            	<a href="#">This is a link</a>
            							</div>
          							</div>
        						</div>
      						</div>
						</div>
      <div id="test6">Ideally we should add more stuff</div>
    </div>
  </div>
				
						
				
			</div>
		)
	}
}
export default Homepage;
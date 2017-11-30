import React, { Component } from 'react';
import Progress from './Progress.js';


class Homepage extends Component {


	render() {
		return (
			<div className='row'>
			<Progress/>
				<h1>Home Page</h1>
				
				<h3>lorem</h3>
				<ol>
					<li>  
						<div className="switch">
    						<label>Not Completed
    							<input type="checkbox"/>
    								<span className="lever"></span>
    						Completed</label>
  						</div>				
  						This is only the beginning baby
					</li>
					<li>  
						<div className="switch">
    						<label>Not Completed
    							<input type="checkbox"/>
    								<span className="lever"></span>
    						Completed</label>
  						</div>				
  						This is only the second STEP
					</li>
				</ol>
			</div>
		)
	}
}
export default Homepage;
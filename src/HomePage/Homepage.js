import React, { Component } from 'react';


class Homepage extends Component {


	render() {
		return (
			<div className='row'>
				<h1>Home Page</h1>
				<h3>lorem</h3>
				<ol>
					<li>  
						<div class="switch">
    						<label>Not Completed
    							<input type="checkbox"/>
    								<span class="lever"></span>
    						Completed</label>
  						</div>				
  						
					</li>
					<li>Test2
					</li>
				</ol>
			</div>
		)
	}
}
export default Homepage;
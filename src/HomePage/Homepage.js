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
  						This is only the beginning baby
					</li>
					<li>  
						<div class="switch">
    						<label>Not Completed
    							<input type="checkbox"/>
    								<span class="lever"></span>
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
import React, { Component } from 'react';

class MakeGoal extends Component {
	constructor(){
    //super initializes the keyword this
    super();
    this.state = {
    	goalTitle: "",
    	goalSummary: ""
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({goalTitle: event.target.value});
  }
  handleSummary(event) {
    this.setState({goalSummary: event.target.value});
    
  }

  handleSubmit(event) {
    console.log('A title was submitted: ' + this.state.goalTitle);
    console.log('A summarywas submitted: ' + this.state.goalSummary);
    this.props.grabbingGoals(this.state.goalTitle, this.state.goalSummary)
    
  }

  render() {
    return (
      <div className='row'>   
            <div className="card blue-grey darken-1"> 
              <h3 className="center-align white-text">Create a Goal</h3>
                <div className="card-content white-text"> 		
  	               <form onSubmit={this.handleSubmit}>
    	               <label>Goal Title:</label>
    		              <input type="text" placeholder="For Example, Learn Spanish" onChange={this.handleTitle} />
    	               <label>Summary of Goal:</label>
          	        	<input type='text' placeholder='Be proficient to visit Spain!' onChange={this.handleSummary}></input>
          	       		<input className="black-text" type="submit" value="Submit" />
                  </form>
                </div>
            </div> 
        </div>
    );
  }
}
export default MakeGoal; 			


// <div>
// 				<h3>Create a Goal</h3>
// 				<form>
// 					<label>Goal Title</label><input type='text' placeholder="For Example, Learn Spanish"></input>
// 					<label>Summary of Goal</label><input type='text' placeholder='Be proficient to visit Spain!' ></input>
// 					<button onClick={this.handleSubmit} className="waves-effect waves-light btn">Create Goal</button>
// 				</form>
// 			</div>
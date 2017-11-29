import React, { Component } from 'react';


class Login extends Component {

	login = (e) => {
		if(e.key === 'Enter'){
			this.props.login(e.target.value)
		}
		console.log(e.target.value)
	}
	render() {
		return (
			<div className='row'>
				<h1>Login Page</h1>
				Login:<input type="text" onKeyPress={this.login}/>
			</div>
		)
	}
}
export default Login;
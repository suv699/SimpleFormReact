import React, { Component } from 'react';

import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';

function checkUser(userList, login) {
		for (let i = 0; i < userList.length; i++) {
			if (userList[i].login === login) {
				return false;
			}
		}
		return true;
};
export default class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	};

	state = {
		login: '',
		password:'',
		users: []
	}
	onChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});		
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (!checkUser(this.state.users, this.state.login)) {
			alert(`Login уже занят, введите другой!`);
			return;
		}
		if (this.state.login && this.state.password) {
			//alert(`Добро пожаловать, ${this.state.login} !`);
			//this.props.history.push('/about');
			console.log(JSON.stringify(this.props));
		} else {
			alert('Введите логин пароль!');
		}

		this.props.onLogin();
		
	}

	componentDidMount() {
		//const urlUsers = 'https://jsonplaceholder.typicode.com/todos/1';
		const urlUsers = 'http://www.mocky.io/v2/5d907eec3000007c00cacf3d';
		console.log('Login form will renrering!');
/*y
		fetch(urlUsers, {
			method: 'PUT',
			body: JSON.stringify({
				username: 'Elon Musk',
				enail: '23213',
				userId: 12
			}),
			headers: {
				"Content-type": "application/json: charset=utf-8" 
			}
		});*/

		fetch(urlUsers).then(function(response) {
			console.log('---> fetch - ' + response);
			return response.json();
		}).then(data => {
			console.log('response - ' + data);
			
			this.setState({users: data});
		});
		
		console.log('After fetch!');
	};

	goToReg = () => {
		console.log('redirect - ');
		//return <Redirect to="/registration"/>;
		//this.props.history.push('/registration');
	};

	render () {
		return (
			<div className="LoginForm">
				<form onSubmit={this.onSubmit}>
					<div className="label_title">
						<span className="label_span">Login</span>
					</div>
					<div>
						<InputComponent 
							type="name"
							name="login"
							value={this.state.login}
							onChange={this.onChange}
						/>
					</div>
					<LabelComponent text="Password"/>
					<div>
						<InputComponent 
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.onChange}
						/>
					</div>
					<div className="login_btn">
						<div>
							<input type="submit" value="Вход"/>
						</div>
						<div className="login_link">
							<input type="button" onClick={this.goToReg} value="Registration"/>
						</div>
					</div>
				</form>
			</div>
		);
	};
};
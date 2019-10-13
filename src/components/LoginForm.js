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
		console.log('con - ' + JSON.stringify(props));
		this.onChange = this.onChange.bind(this);
	};

	state = {
		login: '',
		password:'',
		users: [], 
		isError: false
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
			alert(`Добро пожаловать, ${this.state.login} !`);
			//this.props.history.push('/about');
			console.log(JSON.stringify(this.props));
		} else {
			alert('Введите логин пароль!');
		}

		setTimeout(() => {
			this.setState({
				isError: true
			});
		}, 5000);

		//this.props.onLogin();	
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
		console.log('redirect - ' + JSON.stringify(this.props)) ;
		//return <Redirect to="/registration"/>;
		this.props.history.push('/registration');
	};

	render () {
		return (
			<div className="Form">
				<form onSubmit={this.onSubmit}>
					<div className="label_title">
						<span className="label_span">Заполните форму</span>
					</div>
					<div>
						<InputComponent 
							type="name"
							name="login"
							value={this.state.login}
							onChange={this.onChange}
						/>
					</div>
					{/* <LabelComponent text="Password"/> */}
					<div>
						<InputComponent 
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.onChange}
						/>
					</div>
					<div className="console">
				{
					!this.state.isError ? 
						<LabelComponent 
							text=""
							className="success"/>
						 : 
						<LabelComponent 
							text="*Логин занят" 
							className="warning"
							/>
				}
				</div>

					<div className="login_btn">
						<input className="btn-registration" type="submit" value="Вход"/>
						<span onClick={this.goToReg} >Registration</span>
					</div>
				</form>
			</div>
		);
	};
};
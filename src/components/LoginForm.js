import React, { Component } from 'react';

import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';

const urlUsers = 'http://www.mocky.io/v2/5da31b982f000056008a06e5';

function checkUser(userList, login, password) {
	for (let i = 0; i < userList.length; i++) {
		if (userList[i].login === login && userList[i].password === password) {
			return userList[i]
		}
	}
	return false;
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
		isError: false,
		errorMesssage: 'Заполните все поля'
	}
	onChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});		
	};

	showError = (msg) => {
		console.log('show error');
		this.setState({
			errorMesssage: msg,
			isError: true

		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (this.state.login && this.state.password) {
			//alert(`Добро пожаловать, ${this.state.login} !`);
			let checkUserData = checkUser(this.state.users, this.state.login, this.state.login);			

			let  newUser = {
				username: this.state.login,
				password: this.state.password,
				userId: new Date().getTime()
			};
			
			fetch(urlUsers, {
				method: 'PUT',
				body: JSON.stringify({newUser}),
				headers: {
					"Content-type": "application/json: charset=utf-8" 
				}
			}).then(respone => {
				if (!checkUserData) {
					
					setTimeout(() => {
						this.showError('Неверный логин пароль!');
					}, 500);

					return;
				} else {
					setTimeout(() => {
						this.props.onLogin(checkUserData);
						this.props.history.push('/about');	
					}, 500);
				}
			});
 
		} else {
			this.showError('Введите логин пароль!');
		}	
	}

	componentDidMount() {
		console.log('Login form will renrering!');

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
		this.props.history.push('/registration');
	};

	render () {
		return (
			<div className="Form">
				<form onSubmit={this.onSubmit}>
					<div className="label_title">
						<span className="label_span">Вход</span>
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
							text={this.state.errorMesssage}
							className="success"/>
						 : 
						<LabelComponent 
							text={this.state.errorMesssage}
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
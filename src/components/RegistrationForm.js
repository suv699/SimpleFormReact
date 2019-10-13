import React, { Component } from 'react';

import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';

function checkUnquieLogin (userList, login) {
	
	for (let i = 0; i < userList.length; i++) {
		if (userList[i].login === login) {
			return true;
		}
		return false;
	}
	
};
export default class RegistrationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newlogin: '',
			useremail: '',
			isError: false,
			users: []
		}

	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});

		if (e.target.name === 'New Login') {
			checkUnquieLogin(this.state.users, e.target.value) ? this.setState({
				isError: true
			}) : this.setState({
				isError: false
			});

		}
	};

	onSendLogin = (e) => {
		//fetch();
		console.log('send');
		this.props.history.push('/');
	}

	componentDidMount() {
		const urlUsers = 'http://www.mocky.io/v2/5d907eec3000007c00cacf3d';

		fetch(urlUsers).then(response => {
			return response.json();
		}).then(response => {
			this.setState({users: response});
			
		});
	}

	render () {

		return (
			
			<div className="Form">
				<div className="label_title">
					<span className="label_span">Заполните форму</span>
				</div>
				{/* <LabelComponent text="New login"/> */}
				<InputComponent 
					type="name"
					name="New Login"
					onChange={this.onChange}
				/>
				{/* <LabelComponent text="Email"/> */}
				<InputComponent 
					type="name"
					name="Email"
					onChange={this.onChange}
				/>
				
				<div className="console">
				{
					!this.state.isError ? 
						<LabelComponent 
							text="*Введите новый пароль и почту"
							className="success"/>
						 : 
						<LabelComponent 
							text="*Логин занят" 
							className="warning"
							/>
				}
				</div>
				<button  className="btn-reg-send" onClick={this.onSendLogin}>
					Send
				</button>
			</div>
			
		);
	};
};
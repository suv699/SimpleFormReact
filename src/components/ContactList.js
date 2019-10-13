import React, { Component } from 'react';
import Contact from './Contact';

const urlUsers = 'http://www.mocky.io/v2/5da31b982f000056008a06e5';

export default class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	};

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

	render () {
		const userList = this.state.users.map(item => <li><Contact userData={item}/></li>);
		console.log('---> ' + userList);
		return (
			<div className="contact">
				<ul>
					{userList}
				</ul>
			</div>
		);
	}
};
import React , { Component } from 'react';

export default class Contact extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const {name, login, website, phone, company, address} = this.props.userData;

		console.log('props --- ' + JSON.stringify(this.props));
		return (
			<div className="contact">
				<h1>User Card</h1>
				<h2>Name: {name}</h2>
				<div className="conact__mainInfo">
					<span>Login: {login}</span>
					<span>Phone: {phone}</span>
					<span>Website: {website}</span>
				</div>

				<div>
					<h1>Work Place</h1>
					<div className="conact__mainInfo">
						<span>Company Name: {company.name}</span>
					</div>
				</div>

				<div>
					<h1>Address</h1>
					<div className="conact__mainInfo">
						<span>City: {address.city}</span>
						<span>Street: {address.street}</span>
						<span>Suite: {address.suite}</span>
					</div>
				</div>
				
			</div>
		);
	};
};

import React from 'react';

export default function ContactView(props) {
	const {login, website, phone, company, address} = props.userData;
	return (
		<div>
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
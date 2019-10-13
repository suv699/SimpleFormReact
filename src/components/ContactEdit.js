import React, { Component } from 'react';

export default class ContactEdit extends Component{
	constructor(props){
		super(props);

		this.state = {
			login: '',
			phone: '',
			website: '',
			company:{
				name: ''
			},
			address: {
				city: '',
				street: '',
				suite: ''
			}
		};
	};

	onChange = (e) => {
		console.log('evenv ->> ' + (e));
		const data = this.state;

		const name1 = e.target.name;
		const value = e.target.value;
		if (name1 === 'name') {
			data['company'] = {
				[name1]: value
			}
		} else
		if (name1 === 'city' || name1 === 'street' || name1 === 'suite') {
			data['address'] = {
				[name1]: value
			}
		} else {
			data[name1] = value; 
		}

		const {login, phone, website, company: {name}, address: {city, street, suite} } = data;

		this.setState({
			login, phone, website, company: {name}, address: {city, street, suite}
		});
		console.log('state - ' + JSON.stringify(this.state));
	}

	componentDidMount() {
		const {login, phone, website, company: {name}, address: {city, street, suite} } = this.props.userData;
		this.setState({
			login, phone, website, company: {name}, address: {city, street, suite}
		});
	};

	componentWillUnmount() {
		this.props.updateData(this.state);
	};

	render() {
		return (
			<div>
				<div className="conact__mainInfo">
					<span>Login:</span>
					<input type="text" name="login" value={this.state.login} onChange={this.onChange}/>
					<span>Phone:</span>
					<input type="text" name="phone" value={this.state.phone} onChange={this.onChange}/>
					<span>Website:</span>
					<input type="text" name="website" value={this.state.website} onChange={this.onChange}/>
				</div>

				<div>
					<h1>Work Place</h1>
					<div className="conact__mainInfo">
						<span>Company Name:</span>
						<input type="text" name="name" value={this.state.company.name} onChange={this.onChange}/>
					</div>
				</div>

				<div>
					<h1>Address</h1>
					<div className="conact__mainInfo">
						<span>City:</span>
						<input type="text" name="city" value={this.state.address.city} onChange={this.onChange}/>
						<span>Street:</span>
						<input type="text" name="street" value={this.state.address.street} onChange={this.onChange}/>
						<span>Suite:</span>
						<input type="text" name="suite" value={this.state.address.suite} onChange={this.onChange}/>
					</div>
				</div>
			</div>
		);
	};
};
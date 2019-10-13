import React , { Component } from 'react';
import ContactDetail from './ContactDetail';

export default class Contact extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		isOpen: false
	};

	onShow = () => {
		this.setState({isOpen: !this.state.isOpen});
	};

	render() {
		const {name} = this.props.userData;
		
		return (
			<div className="contact">
				<div className="contact__body">
				<span className="btn__contact" onClick={this.onShow}>{this.state.isOpen ? 'Hide' : 'Show'}</span>
					<h1>User Card</h1>
					<h2>Name: {name}</h2>
					{this.state.isOpen ?
						<ContactDetail userData={this.props.userData}/>	
						: null}
				</div>
			</div>
		);
	};
};

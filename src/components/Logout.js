import React, { Component } from 'react';

export default class Logout extends Component {
	componentWillMount(){
		this.props.onLogout();
	};

	render() {
		return null;
	};
};
import React, { Component } from 'react';
import ContactEdit from './ContactEdit';
import ContactView from './ContactView';

export default class ContactDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
			isEdit: false,
			userData: {}
		}
	}

	onEdit = () => {
		this.setState({isEdit: !this.state.isEdit});
	};
	updateData = (data) => {
		this.setState({
			userData: data
		});
	};
	componentWillMount() {
		this.setState({
			userData: this.props.userData	
		});
	};

	render() {
		const userData = this.state.userData;
		return (
			<div>
				<span className="btn__contact" onClick={this.onEdit}>{this.state.isEdit ? 'Save' : 'Edit'}</span>
				{this.state.isEdit ? <ContactEdit updateData={this.updateData} userData={userData}/> : <ContactView userData={userData}/>}
			</div>
		);
	};
};
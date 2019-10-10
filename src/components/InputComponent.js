import React, { Component } from "react";

export default class InputComponent extends Component {
	constructor(props) {
		super(props);
	};

	state = {
		value: ''
	};

	onChange = (e) => {
		const value = e.target.value;
		this.setState({
			value: value
		});

		this.props.onChange(e);
	};

	render() {
		const {type, name} = this.props;
		return (
			<div className="has-error"> 
				<input 
					type={type}
					name={name}		
					placeholder={name}
					value={this.state.value}
					onChange={this.onChange}
				/>
			</div>
		);
	};
};
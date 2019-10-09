import React, { Component } from 'react';

export default class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: new Date()
		};
	};

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState({
				time: new Date()
			});
		}, 1000);
	};

	componentWillUnmount() {
		clearInterval(this.timerId);
	};

	render() {
		const time = this.state.time;
		return(
			<div className="time">
				<div className="time__text">Текущее время:</div>
				<div>{time.toLocaleTimeString()}</div>
			</div>
		);
	};
}
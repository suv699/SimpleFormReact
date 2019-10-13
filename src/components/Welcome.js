import React, {Component} from 'react';
import Clock from './Clock';

function Welcome({userName}) {
	return (
		<div className="welcome">
			<h1 className="welcome__title">Welcome, {userName}</h1>
			<Clock />
		</div>
	);
}

export default Welcome
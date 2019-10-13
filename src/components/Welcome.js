import React, {Component} from 'react';
import Clock from './Clock';

class Welcome extends Component {
    render() {
        return (
			<div className="welcome">
				<h1 className="welcome__title">Welcome</h1>
				<Clock />
			</div>
        );
    }
}

export default Welcome
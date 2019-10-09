import React from 'react';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import CustomRouter from './components/CustomRouter';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false
		}
	}
	onChange = () => {
		console.log('--> ' + this.state.flag)
		this.setState({
			user: !this.state.user
		});

		this.props.history.push('/about');
	}
	render () {
		return (
			<div>
				<Header />
				<Content>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/login" onLogin={this.onChange} render={
							(props) => (<LoginForm onLogin={this.onChange}/>)
							} />
						<CustomRouter path="/about" user={this.state.user} component={About} />
						<CustomRouter path="/contact" user={this.state.user} component={About} />
						<Route path="/registration" component={RegistrationForm} />
					</Switch>
				</Content>
			</div>
		);
	}
}

export default withRouter(App);

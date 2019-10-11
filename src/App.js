import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import CustomRouter from './components/CustomRouter';
import Logout from './components/Logout';
import NotFound from './components/NotFound';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false
		}
	}
	onLogin = () => {
		console.log('--> ' + this.state.flag)
		this.setState({
			user: !this.state.user
		}, this.props.history.push('/about'));
	}
	onLogout = () => {
		this.setState({
			user: false
		}, this.props.history.push('/'));
	};
	/*
	onRegistration = () => {
		this.props.history.push('/registration');
	};
	*/
	render () {
		return (
			<div>
				<Header user={this.state.user}/>
				<Content>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/login" render={
							(props) => (<LoginForm onLogin={this.onLogin} {...props}/>)
							} />

						<Route path="/logout" 
							render={(props) => (<Logout onLogout={this.onLogout} />)} 
						/>

						<CustomRouter path="/about" user={this.state.user} component={About} />
						<CustomRouter path="/contact" user={this.state.user} component={About} />
						<Route path="/registration" 
							render={(props)=>(<RegistrationForm {...props}/>)}
						/>
						<Route component={NotFound}/>
					</Switch>
				</Content>
			</div>
		);
	}
}

export default withRouter(App);

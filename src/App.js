import React from 'react';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
			flag: !this.state.flag
		});
	}
	render () {
		return (
			<div>
				<Router>
					<Header />
					<Content>
						<Switch>
							<Route exact path="/" component={Welcome} />
							<Route path="/login" component={LoginForm} />
							<CustomRouter path="/about" user={this.state.user} component={About} />
							<CustomRouter path="/contact" user={this.state.user} component={About} />
							<Route path="/registration" component={RegistrationForm} />
						</Switch>
					</Content>
				</Router>
			</div>
		);
	}
}

				/*
				<Router>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/login" component={LoginForm} />
						<Route path="/registration" component={RegistrationForm} />
					</Switch>
				</Router>
				*/
export default App;

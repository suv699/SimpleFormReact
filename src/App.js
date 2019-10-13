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
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ContactList from './components/ContactList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false,
			userName: 'guest',
			userData: {}
		}
	}
	onLogin = (userData) => {
		this.setState({
			user: true,
			userName: userData.username,
			userData: userData
		});
	}
	onLogout = () => {
		this.setState({
			user: false,
			userName: 'guest'
		}, this.props.history.push('/'));
	};

	render () {
		return (
			<div>
				<Header user={this.state.user}/>
				<Content>
					<Switch>
						<Route exact path="/" render={props =>
							<Welcome userName={this.state.userName}/>
						} />
						<Route path="/login" render={
							(props) => (<LoginForm onLogin={this.onLogin} {...props}/>)
							} />

						<Route path="/logout" 
							render={(props) => (<Logout onLogout={this.onLogout} />)} 
						/>

						<CustomRouter path="/about" user={this.state.user} component={About} />
						<CustomRouter path="/contact" user={this.state.user} userData={this.state.userData} component={Contact} />
						<CustomRouter path="/allcontact" user={this.state.user} component={ContactList} />
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

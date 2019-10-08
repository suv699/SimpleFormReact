import React from 'react';
import './static/style/style.css';
import 'bootstrap/dist/css/bootstrap.css'; 
//import 'bootstrap/dist/css/bootstrap-theme.css';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: true
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
			<Router>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/login" component={LoginForm} />
					<Route path="/registration" component={RegistrationForm} />
				</Switch>
			</Router>
		);
	}
	
}

export default App;

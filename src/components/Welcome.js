import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Clock from './Clock';
import Header from './Header';


class Welcome extends Component {
    render() {
        return (
			<div className="welcome">
				<h1>Welcome</h1>
				<Clock />
			</div>
        );
    }
}
/*
<Clock />

render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}/>
        </Route>
    </Router>
), document.getElementById('root'));
*/
export default Welcome
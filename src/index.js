import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/style/style.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	(<BrowserRouter>
		<App />
	</BrowserRouter>), document.getElementById('root'));
	

serviceWorker.unregister();

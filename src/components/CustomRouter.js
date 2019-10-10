import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function CustomRouter ({ user, component: Component, ...rest}) {
	return (
		<Route {...rest} render={
			props => (
				user ? <Component /> : <Redirect to="/login"/>
			)
		}/>
	);
};
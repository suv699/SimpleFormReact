import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({user}) {
	return(
		<div>
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<div className="header__logo">Logo</div>
						<nav className="nav">
								<NavLink activeClassName="nav__active" className="nav__link" exact to='/'>HOME</NavLink>
								<NavLink activeClassName="nav__active" className="nav__link" to="/about">About</NavLink>
								<NavLink activeClassName="nav__active" className="nav__link" to="/contact">CONTACT</NavLink>
								<NavLink activeClassName="nav__active" className="nav__link" to={user ? '/logout' : '/login'}>{user ? 'LOGOUT' : 'LOGIN'}</NavLink>								
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};
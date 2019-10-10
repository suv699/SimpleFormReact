import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header({user}) {
	return(
		<div>
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<div className="header__logo">Logo</div>
						<nav className="nav">
								<Link className="nav__link" to='/'>HOME</Link>
								<Link className="nav__link" to="/about">About</Link>
								<Link className="nav__link" to="/contact">CONTACT</Link>
								<Link className="nav__link" to={user ? '/logout' : '/login'}>{user ? 'LOGOUT' : 'LOGIN'}</Link>								
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};
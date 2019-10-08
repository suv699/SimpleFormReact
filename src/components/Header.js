import React, { Component } from 'react';

export default function Header() {
	return(
		<div>
			<header class="header">
				<div class="container">
					<div class="header__inner">
						<div class="header___logo">Logo</div>
						<nav class="nav">
								<a class="nav__link" href="/home/">HOME</a>
								<a class="nav__link" href="/services/">SERVICES</a>
								<a class="nav__link" href="/partners/">PARTNERS</a>
								<a class="nav__link" href="/customers/">CUSTOMERS</a>
								<a class="nav__link" href="/careers/">CAREERS</a>
								<a class="nav__link" href="/contact/">CONTACT</a>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};
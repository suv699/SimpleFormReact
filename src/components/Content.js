import React, { Component } from 'react';

export default function Content(props) {
	return(
		<div className="simplepage">
			<div className="container">
				<div className="simplepage__inner">
					{props.children}
				</div>
			</div>
		</div>
	);
};

/*
<div className="container">
				<div className="simplepage__inner"></div>
			</div>
<h1 className="simplepage__title">My simple Form</h1>
*/